import React, { useEffect, useState } from "react";
import Popup from "./Popup";
import Monument from "./Monument.js";
import "./Monument.css";
import { fetchPlaceList } from "../store/API";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "174c37c8a10db6579c04456dd95f01450",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  });
  const { placeList } = useSelector((state) => state.place);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [inputText, setInputText] = useState("");
  const [stat, setStat] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleclose = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle = () => {
    setToggle(!toggle);
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
        <div className="row">
          <div className="container2 col-10" id="container">
            {placeList.map((item) => {
              return (
                <Monument
                  input={inputText}
                  stat={stat}
                  data={item}
                  handleToggle={handleToggle}
                />
              );
            })}
          </div>
          {toggle && <div className="col-2">hello</div>}
        </div>
      </div>
    </div>
  );
}
