import React from "react";
import "./Cart.css";
import { CartProvider, useCart } from "react-use-cart";
export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  return (
    <>
      <div className="details">
        <p className="details-name">Add Your Details Here</p>
        <form>
          <input type="text" placeholder="Name" className="details-input" />
          <input type="number" placeholder="Age" className="details-input" />
          <input
            type="number"
            placeholder="Aadhar Number"
            className="details-input"
          />
          <input type="submit" value="Add" className="details-input-add" />
        </form>
      </div>
      <div className="container div-amount-cart">
        <div className="amount-cart row">
          <div className="cart-main col-8">
            {items.map((item) => (
              <div className="cart">
                <div className="cart-div">
                  <img src={item.img} className="cart-img"></img>
                </div>
                <div className="cart-div2">
                  <i
                    class="fa-solid fa-trash-can button-delete"
                    onClick={() => removeItem(item.id)}
                  ></i>
                  <p className="cart-name">{item.name}</p>

                  <p className="cart-date2">Date</p>
                  <input type="date" className="cart-date"></input>
                </div>
              </div>
            ))}
          </div>
          <div className="amount col-4 sticky-top">
            <p>amount</p>
          </div>
        </div>
      </div>
    </>
  );
}
