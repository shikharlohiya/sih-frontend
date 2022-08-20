import React from "react";
import explor from "./explore.jpg";
import "./explore.css";
import guide from "./guide.png";
import health from "./health.png";
import water from "./water.png";
import secure from "./secure.png";
import desk from "./desk.png";
import amb from "./amb.png";
export default function explore() {
  return (
    <>
      <div className="explore-img-div">
        <img src={explor} alt=".." className="explore-img123"></img>
      </div>
      <p>Red Fort</p>
      <p className="monument-desc">
        The beautiful Red Fort (Lal Qila) was built by Shah Jahan in 1648 and
        served as the seat of Mughal power until 1857. This stunning structure,
        with its tall, red sandstone walls covers an area of more than two
        square kilometers, the entirety of which is crescent shaped and
        surrounded by a moat. It is proof of the glory of the flourishing Mughal
        Empire in Delhi.
      </p>
      <p className="para">Opening closing time</p>
      <p className="monument-desc2">Sunrise to sunset. (Only monday closed)</p>
      <p className="para">Entrance Fee</p>
      <p className="monument-desc3">Rs.10 (Indians) Rs.250 (Foreigners)</p>

      <div className="container">
        <p className="serv12">In momument services</p>
        <div className=" val-dec-12 row">
          <div className="col-6 serv123">
            {" "}
            <img src={secure} alt=".." className="img-serv-12"></img>24 hour on
            site security
          </div>
          <div className="col-6 serv123 mar-1-2">
            {" "}
            <img src={desk} alt=".." className="img-serv-12"></img>Information
            desk
          </div>
          <div className="col-6 serv123 mar-top1">
            {" "}
            <img src={guide} alt=".." className="img-serv-12"></img>Tour guide
          </div>
          <div className="col-6 serv123 mar-1-2 mar-top1">
            {" "}
            <img src={water} alt=".." className="img-serv-12"></img>Drinking
            Water
          </div>
        </div>
      </div>
      <div className="container">
        <p className="serv12">Emergeny Support</p>
        <div className=" val-dec-12 row">
          <div className="col-6 serv123">
            <img src={amb} alt=".." className="img-serv-12"></img>Ambulance
          </div>
          <div className="col-6 serv123 mar-1-2">
            {" "}
            <img src={health} alt=".." className="img-serv-12"></img>First Aid
          </div>
        </div>
      </div>
    </>
  );
}
