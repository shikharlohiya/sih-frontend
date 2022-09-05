import React from "react";
import { useState, useEffect } from "react";
import { ticket } from "../home";
import axios from "axios";
import "./Cart.css";
import { CartProvider, useCart } from "react-use-cart";
import { loadRazorpay, addUserToCart, deleteItem, getCart } from "../store/API";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/CartSlice";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import moment from "moment";
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
  const CartCard = ({ item, index }) => {
    const [date, setDate] = useState(
      moment(new Date().toISOString()).format("YYYY-MM-DD")
    );
    return (
      <>
        <div className="cart">
          <div className="cart-div">
            <img
              src={`https://sih11.herokuapp.com${item.monumentId.img}`}
              className="cart-img"
            ></img>
          </div>
          <div className="cart-div2">
            <i
              class="fa-solid fa-trash-can button-delete"
              onClick={() => removeItem(item._id)}
            ></i>
            <p className="cart-name">{item.monumentId.name}</p>

            <TextField
              type={"date"}
              required
              id="date"
              label="Date"
              variant="outlined"
              name="date"
              value={item.date}
              onChange={(e) => {
                const newObj = Object.assign(
                  { date: e.target.value },
                  cartItems[index]
                );
                console.log(cartItems);
                dispatch(
                  cartActions.upDateCartItems({ data: newObj, index: index })
                );
              }}
            />
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
      </>
    );
  };
  const ticketForm = () => {
    return (
      <>
        <div className="details">
          <div className="row">
            <div className="col-4">
              <form>
                <p className="national">Select Nationality:</p>
                <ul className="donate-now">
                  <li className>
                    <input
                      type="radio"
                      name="nationality"
                      value="Indian"
                      onChange={handleChange}
                    ></input>
                    <label>Indian</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="nationality"
                      value="Foreigner"
                      onChange={handleChange}
                    ></input>
                    <label>Foreigner</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="nationality"
                      value="SAARC"
                      onChange={handleChange}
                    ></input>
                    <label>SAARC</label>
                  </li>
                  <li>
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
            <div className="col-7 input-sec">
              <div>
                <FormControl sx={{ m: 0, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-label">
                    User Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="userType"
                    onChange={handleChange}
                    value={formData.userType}
                  >
                    <MenuItem value="Adult">Adult</MenuItem>
                    <MenuItem value="Child">Child</MenuItem>
                  </Select>
                </FormControl>
                <div>
                  <FormControl sx={{ m: 0, minWidth: 220 }}>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formData.gender}
                      label="Gender"
                      onChange={handleChange}
                      name="gender"
                    >
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl sx={{ m: 0, minWidth: 220 }}>
                    <InputLabel id="demo-simple-select-label">
                      Select id
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="idType"
                      onChange={handleChange}
                      value={formData.idType}
                    >
                      <MenuItem value="Passport">Passport</MenuItem>
                      <MenuItem value="Pan Card">Pan Card</MenuItem>
                      <MenuItem value="Driving Licence">
                        Driving Licence
                      </MenuItem>
                      <MenuItem value="Voter Id">Voter Id</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </Select>
                  </FormControl>
                </div>
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
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container div-amount-cart">
          <div className="amount-cart row">
            <div className="cart-main col-8">
              {cartItems?.map((item, index) => {
                return <CartCard item={item} index={index} />;
              })}
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
