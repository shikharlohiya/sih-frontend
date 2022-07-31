import React from "react";
import "./Monument.css";
import Data from "./Data.json";
import { CartProvider, useCart } from "react-use-cart";
const Monument = (props) => {
  const { addItem } = useCart();
  const filteredData = Data.filter((el) => {
    //if no input the return the original

    if (props.input === "" && props.stat === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return (
        el.name.toLowerCase().includes(props.input) &&
        el.stateUT.match(props.stat)
      );
    }
  });
  const ButtonClick = (monument2) => {
    alert("Added To Cart");
    addItem(monument2);
  };
  return (
    <>
      {filteredData.map((monument) => (
        <div className="monumentCard">
          <img src={monument.img} alt={monument.name}></img>
          <p className="name">{monument.name}</p>
          <p className="details2 description">{monument.description}</p>
          <p className="para">Opening Closing Time</p>
          <p className="details2">{monument.time}</p>
          <p className="para">Entrance Fee</p>
          <p className="details2">{monument.fee}</p>
          <button className="button" onClick={() => ButtonClick(monument)}>
            Book Now
          </button>
        </div>
      ))}
    </>
  );
};
export default Monument;
