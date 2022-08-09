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

export const addToCart = (id) => {
  return async (dispatch) => {
    dispatch(cartActions.setIsLoading(true));
    try {
      console.log();
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
      dispatch(cartActions.setIsLoading(false));
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
