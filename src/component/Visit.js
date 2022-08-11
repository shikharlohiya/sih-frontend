import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import Monument from "./Monument.js";
import "./Monument.css";
import { fetchPlaceList } from "../store/API";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { placeList } = useSelector((state) => state.place);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [inputText, setInputText] = useState("");
  const [stat, setStat] = useState("");
  const handleclose = () => {
    setIsOpen(!isOpen);
  };
  let handleState = (val) => {
    setStat(val);
  };
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  useEffect(() => {
    dispatch(fetchPlaceList());
  }, []);
  return (
    <div>
      {isOpen && <Popup handleclose={handleclose} handleState={handleState} />}

      <div>
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control monum"
            placeholder="Search Monuments"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={inputHandler}
          />
        </div>
        <div className="container2" id="container">
          {placeList.map((item) => {
            return <Monument input={inputText} stat={stat} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
