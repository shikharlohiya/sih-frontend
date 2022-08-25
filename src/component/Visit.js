import React, { useEffect, useMemo, useState } from "react";
import Popup from "./Popup";
import Monument from "./Monument.js";
import "./Monument.css";
import { fetchPlaceList, getNearPlaces } from "../store/API";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { placeList, nearPlaces } = useSelector((state) => state.place);
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState(placeList);
  const [isOpen, setIsOpen] = useState(true);
  const [inputText, setInputText] = useState("");
  const [stat, setStat] = useState("");
  const [toggle, setToggle] = useState(false);
  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    setFilterValue(placeList);
  }, [placeList]);
  const handleclose = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  let handleState = (val) => {
    setInputText(val);
    var lowerCase = val.toLowerCase();
    const newData = placeList.filter((item) => {
      return item.stateUT.toLowerCase().includes(lowerCase);
    });
    setFilterValue(newData);
  };
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    const newData = placeList.filter((item) => {
      return item.name.toLowerCase().includes(lowerCase);
    });
    setFilterValue(newData);
  };
  useEffect(() => {
    dispatch(fetchPlaceList());
  }, []);
  useMemo(() => {
    dispatch(getNearPlaces(currentData._id));
  }, [currentData._id]);
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
            value={inputText}
          />
        </div>
        <div className="container-fluid">
          <div className="monument-cont ">
            <div className="container2" id="container">
              {filterValue.map((item) => {
                return (
                  <Monument
                    input={inputText}
                    stat={stat}
                    data={item}
                    handleToggle={handleToggle}
                    setCurrentData={setCurrentData}
                  />
                );
              })}
            </div>

            {toggle && (
              <>
                <div className=" temp123  explore-tab">
                  <div className="desc245">
                    <span className="close-ico" onClick={handleToggle}>
                      x
                    </span>
                    <img
                      src={`http://localhost:8000${currentData.img}`}
                      className="img-side"
                      alt=".."
                    ></img>

                    <p className="name2">{currentData.name}</p>
                    <button className="monument-button">
                      {" "}
                      <img
                        src="./imagess/Vector.png"
                        alt=".."
                        style={{ margin: "6px" }}
                      ></img>
                      View Monument Map
                    </button>
                    <p className="monument-desc">{currentData.description}</p>
                    <p className="para">Opening closing time</p>
                    <p className="monument-desc2">{currentData.time}</p>
                    <p className="para">Entrance Fee</p>
                    <p className="monument-desc3">{currentData.fee}</p>
                  </div>
                  <div className="div-nearby">
                    <p className="text-nearby">Near By:</p>
                    <div className="nearplace-monument-cont">
                      {nearPlaces?.map((item) => {
                        return (
                          <Monument
                            input={inputText}
                            stat={stat}
                            data={item}
                            handleToggle={handleToggle}
                            setCurrentData={setCurrentData}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
