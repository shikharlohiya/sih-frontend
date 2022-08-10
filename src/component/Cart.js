import React from "react";
import { useState, useEffect } from "react";
import { ticket } from "../home";
import axios from "axios";
import "./Cart.css";
import { CartProvider, useCart } from "react-use-cart";
import { addUserToCart, deleteItem, getCart } from "../store/API";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/CartSlice";
const Ticket = () => {
  const dispatch = useDispatch();
  const { cartItems, price } = useSelector((state) => state.cart);
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, cartTotal } =
    useCart();

  const [values, setValues] = useState({
    name: "",
    age: "",
    adhar: "",
    error: "",
    success: false,
  });
  const [allTickets, setAllTickets] = useState([]);
  const { name, age, adhar, error, success } = values;

  const handlechange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const userId = JSON.parse(localStorage.getItem("jwt")).user._id;
    dispatch(addUserToCart({ ...values, userId }));
  };
  const removeItem = (id) => {
    dispatch(deleteItem(id));
  };
  useEffect(() => {
    dispatch(getCart());
  }, []);

  const ticketForm = () => {
    return (
      <>
        <div className="details">
          <p className="details-name">Add Your Details Here</p>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="details-input"
              onChange={handlechange("name")}
              id="name-input"
            />
            <input
              type="number"
              placeholder="Age"
              className="details-input"
              onChange={handlechange("age")}
            />
            <input
              type="number"
              placeholder="Aadhar Number"
              className="details-input"
              onChange={handlechange("adhar")}
            />

            <button
              onClick={onSubmit}
              type="button"
              className="details-input-add"
            >
              Add
            </button>
          </form>
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
              {items.map((item) => (
                <div className="cart-div9 row">
                  <div className="col-8">{item.name}</div>
                  <div className="col-4 amount-price">
                    {item.price * item.quantity}
                  </div>
                </div>
              ))}
              <div className="cart-div10">
                <p>Total {price}</p>
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
