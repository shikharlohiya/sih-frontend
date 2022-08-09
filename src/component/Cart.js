import React from "react";
import { useState, useEffect } from "react";
import { ticket } from "../home";
import axios from "axios";
import "./Cart.css";
import { CartProvider, useCart } from "react-use-cart";
import { getCart } from "../store/API";
import { useDispatch, useSelector } from "react-redux";
const Ticket = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

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

  const callback = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/allTickets");
      setAllTickets(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (event) => {
    items.map((item) => updateItemQuantity(item.id, item.quantity + 1));
    event.preventDefault();
    setValues({ ...values, error: false });
    ticket({ name, age, adhar })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, sucess: false });
        } else {
          setValues({
            ...values,
            name: "",
            age: "",
            adhar: "",
            error: "",
            success: true,
          });
          callback();
        }
      })
      .catch(console.log("error in signup"));
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);
  console.log(cartItems);
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
                      onClick={() => removeItem(item.monumentId.id)}
                    ></i>
                    <p className="cart-name">{item.monumentId.name}</p>

                    <p className="cart-date2">Date</p>
                    <input type="date" className="cart-date"></input>
                  </div>
                  <div className="cart-div4">
                    {allTickets.map((item, index) => {
                      return (
                        <div className="cart-div3 row">
                          <div className="cart-div5-1 col-6">{item.name}</div>
                          <div className="cart-div5 col-3">{item.age}</div>
                          <div className="cart-div5 col-3">{item.adhar}</div>
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
                <p>Total {cartTotal}</p>
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
