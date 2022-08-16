import React, { useEffect, useState } from "react";
import "./Monument.css";
import Data from "./Data.json";
import { CartProvider, useCart } from "react-use-cart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchPlaceList } from "../store/API";
import { CircularProgress } from "@mui/material";
const Monument = (props) => {
  const { data } = props;
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const { addItem } = useCart();

  // const filteredData = placeList.filter((el) => {
  //   //if no input the return the original

  //   if (props.input === "" && props.stat === "") {
  //     return el;
  //   }
  //   //return the item which contains the user input
  //   else {
  //     return (
  //       el.name.toLowerCase().includes(props.input) &&
  //       el.stateUT.match(props.stat)
  //     );
  //   }
  // });
  const handleClick = (event) => {
    props.handleToggle();
  };
  const ButtonClick = (id) => {
    // alert("Added To Cart");
    // addItem(monument2);
    dispatch(addToCart(id, setIsLoading));
  };

  return (
    <>
      <div className="monumentCard">
        <img
          src={`http://localhost:8000${data.img}`}
          alt={data.name}
          onClick={handleClick}
        ></img>
        <p className="name">{data.name}</p>
        <p className="details2 description">{data.description}</p>
        <p className="para">Opening Closing Time</p>
        <p className="details2">{data.time}</p>
        <p className="para">Entrance Fee</p>
        <p className="details2">{data.fee}</p>
        <button className="button" onClick={() => ButtonClick(data._id)}>
          {isLoading ? (
            <CircularProgress sx={{ color: "white" }} size={15} />
          ) : (
            "Book Now"
          )}
        </button>
      </div>
    </>
  );
};
export default Monument;
