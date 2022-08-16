import React from "react";
import { useState, useEffect } from "react";
import { ticket } from "../home";
import axios from "axios";
import "./Cart.css";
import { CartProvider, useCart } from "react-use-cart";
import { loadRazorpay, addUserToCart, deleteItem, getCart } from "../store/API";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/CartSlice";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Ticket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, price, paynowLoading, formData } = useSelector(
    (state) => state.cart
  );

  const removeItem = (id) => {
    dispatch(deleteItem(id));
  };
  useEffect(() => {
    dispatch(getCart());
  }, []);

  const handlePayment = () => {
    dispatch(loadRazorpay(cartItems, price, navigate));
  };

  const handleChange = (e) => {
    dispatch(
      cartActions.setFormData({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };
  const handleSubmit = async (type) => {
    dispatch(addUserToCart(formData));
  };
  console.log(cartItems);
  const ticketForm = () => {
    return (
      <>
        <div className="details">
          <div className="row">
            <div className="col-4">
              <form>
                <p>Select Nationality</p>
                <ul>
                  <li className="content">
                    <input
                      type="radio"
                      name="nationality"
                      value="Indian"
                      onChange={handleChange}
                    ></input>
                    <label>Indian</label>
                  </li>
                  <li className="content">
                    <input
                      type="radio"
                      name="nationality"
                      value="Foreigner"
                      onChange={handleChange}
                    ></input>
                    <label>Foreigner</label>
                  </li>
                  <li className="content">
                    <input
                      type="radio"
                      name="nationality"
                      value="SAARC"
                      onChange={handleChange}
                    ></input>
                    <label>SAARC</label>
                  </li>
                  <li className="content">
                    <input
                      type="radio"
                      name="nationality"
                      value="BIMSTEC"
                      onChange={handleChange}
                    ></input>
                    <label>BIMSTEC</label>
                  </li>
                </ul>
              </form>
            </div>
            <div className="col-8">
              <div>
                <select
                  name="userType"
                  onChange={handleChange}
                  value={formData.userType}
                >
                  <option>select</option>
                  <option>Adult</option>
                  <option>Child</option>
                </select>
              </div>

              <div className="adult-form">
                <form>
                  <input
                    type="text"
                    placeholder="Name"
                    className="details-input"
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    placeholder="Age"
                    className="details-input"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                  <div>
                    <label>Gender</label>
                    <select
                      name="gender"
                      onChange={handleChange}
                      value={formData.gender}
                    >
                      <option>select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div>
                    <label>select id</label>

                    <select
                      name="idType"
                      onChange={handleChange}
                      value={formData.idType}
                    >
                      <option>select</option>
                      <option>Passport</option>
                      <option>Pan Card</option>
                      <option>Driving Licence</option>
                      <option>Voter Id</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <input
                    type="number"
                    placeholder="Enter Your Id"
                    className="details-input"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                  />

                  <button
                    onClick={() => handleSubmit("adult")}
                    type="button"
                    className="details-input-add"
                  >
                    Add Adult
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container div-amount-cart">
          <div className="amount-cart row">
            <div className="cart-main col-8">
              {cartItems?.map((item) => (
                <div className="cart">
                  <div className="cart-div">
                    <img
                      src={`${process.env.REACT_APP_BACKEND}/${item.monumentId.img}`}
                      className="cart-img"
                    ></img>
                  </div>
                  <div className="cart-div2">
                    <i
                      class="fa-solid fa-trash-can button-delete"
                      onClick={() => removeItem(item._id)}
                    ></i>
                    <p className="cart-name">{item.monumentId.name}</p>

                    <p className="cart-date2">Date</p>
                    <input type="date" className="cart-date"></input>
                  </div>
                  <div className="cart-div4">
                    {item.ticketedUsers.map((item, index) => {
                      return (
                        <div className="cart-div3 row">
                          <div className="cart-div5-1 col-6">{item.name}</div>
                          <div className="cart-div5 col-3">{item.age}</div>
                          <div className="cart-div5 col-3">{item.aadhar}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="amount col-4 sticky-top">
              <p className="amount-val">Amount</p>
              <p className="amount-val2">Monument Amount</p>

              <div className="cart-div10">
                <p>Total {price}</p>
              </div>
              <div>
                <button
                  className="paynow-btn"
                  disabled={paynowLoading}
                  onClick={handlePayment}
                >
                  {paynowLoading ? (
                    <CircularProgress sx={{ color: "white" }} size={20} />
                  ) : (
                    "Pay now"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <>{ticketForm()}</>;
};
export default Ticket;
