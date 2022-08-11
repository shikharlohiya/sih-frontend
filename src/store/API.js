import React from "react";
import axios from "axios";
import { Store } from "react-notifications-component";
import { useSelector } from "react-redux";
import { notifications } from "../App";
import { placeActions } from "./PlaceSlice";
import { cartActions } from "./CartSlice";
const API = axios.create({
  baseURL: "http://localhost:8000/",
});

API.interceptors.request.use((req) => {
  // if (Cookies.get('')) {
  //   req.headers[''] = `${Cookies.get('')}`;
  // }
  return req;
});

export const fetchPlaceList = () => {
  return async (dispatch) => {
    try {
      const res = await API.get("/places");
      console.log(res);
      dispatch(placeActions.addPlaceData(res.data));
    } catch (err) {
      Store.addNotification({
        ...notifications,
        type: "danger",
        message: err.response.data,
      });
    }
  };
};

export const addToCart = (id, setIsLoading) => {
  return async (dispatch) => {
    setIsLoading(true);
    try {
      const res = await API.post("/places/addToCart", {
        monumentId: id,
        userId: JSON.parse(localStorage.getItem("jwt")).user._id,
      });
      Store.addNotification({
        ...notifications,
        type: "success",
        message: "Successfully Added",
      });
    } catch (err) {
      console.log(err);
      Store.addNotification({
        ...notifications,
        type: "danger",
        message: "some errot occured",
      });
    } finally {
      setIsLoading(false);
    }
  };
};

export const getCart = () => {
  return async (dispatch) => {
    const userId = JSON.parse(localStorage.getItem("jwt")).user._id;
    try {
      const res = await API.get(`/places/getCart/${userId}`);
      dispatch(cartActions.setCartItems(res.data));
    } catch (err) {
      Store.addNotification({
        ...notifications,
        type: "danger",
        message: "some error occurred",
      });
    }
  };
};

export const deleteItem = (id) => {
  return async (dispatch) => {
    try {
      const res = await API.post("/places/deleteCartItem", {
        cartId: id,
      });
      Store.addNotification({
        ...notifications,
        type: "success",
        message: "Delete Successfully",
      });
      dispatch(getCart());
    } catch (err) {
      console.log(err);
      Store.addNotification({
        ...notifications,
        type: "danger",
        message: "some error occurred",
      });
    }
  };
};

export const addUserToCart = (data) => {
  return async (dispatch) => {
    try {
      const res = await API.post("/places/addUserToCart", data);
      Store.addNotification({
        ...notifications,
        type: "success",
        message: "Sucessfully Added",
      });
      dispatch(getCart());
    } catch (err) {
      console.log(err);
      Store.addNotification({
        ...notifications,
        type: "danger",
        message: "Some error occurred",
      });
    }
  };
};

export function loadRazorpay(cartItems, price) {
  return async (dispatch) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        // setLoading(true);
        dispatch(cartActions.setPaynowLoading(true));
        const result = await axios.post(
          "http://localhost:8000/payment/create-order",
          {
            amount: price + "00",
            cartItems,
          }
        );
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("http://localhost:8000/payment/get-razorpay-key");

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "example name",
          description: "example transaction",
          order_id: order_id,
          handler: async function (response) {
            const result = await axios.post(
              "http://localhost:8000/payment/pay-order",
              {
                amount: amount,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
                cartItems,
              }
            );
            Store.addNotification({
              ...notifications,
              type: "success",
              message: result.data.msg,
            });
            dispatch(getCart());
          },
          prefill: {
            name: "example name",
            email: "email@example.com",
            contact: "111111",
          },
          notes: {
            address: "example address",
          },
          theme: {
            color: "#80c0f0",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        Store.addNotification({
          ...notifications,
          type: "danger",
          message: "some error occured",
        });
      } finally {
        dispatch(cartActions.setPaynowLoading(false));
      }
    };
    document.body.appendChild(script);
  };
}

export default loadRazorpay;
