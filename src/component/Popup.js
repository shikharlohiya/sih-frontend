import React from "react";
import "./Popup.css";
const Popup = (props) => {
  const click = (event, para) => {
    props.handleState(para);
    props.handleclose();
  };
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleclose}>
          x
        </span>
        <h3 className="mo">Select State/Union Territory</h3>
        <div className="row">
          <div className="col-3">
            <ul className="list-unstyled mb-0">
              <li>
                <p
                  onClick={(event) => click(event, "Andhra Pradesh")}
                  className="hover-p"
                >
                  Andhra Pradesh
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Arunachal Pradesh")}
                  className="hover-p"
                >
                  Arunachal Pradesh
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Assam")}
                  className="hover-p"
                >
                  Assam
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Bihar")}
                  className="hover-p"
                >
                  Bihar
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Chattisgarh")}
                  className="hover-p"
                >
                  Chattisgarh
                </p>
              </li>
              <li>
                <p onClick={(event) => click(event, "Goa")} className="hover-p">
                  Goa
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Gujrat")}
                  className="hover-p"
                >
                  Gujrat
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Delhi")}
                  className="hover-p"
                >
                  Delhi
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Andaman & Nicobar")}
                  className="hover-p"
                >
                  Andaman & Nicobar
                </p>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled mb-0">
              <li>
                <p
                  onClick={(event) => click(event, "Haryana")}
                  className="hover-p"
                >
                  Haryana
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Himachal Pradesh")}
                  className="hover-p"
                >
                  Himachal Pradesh
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Jharkhand")}
                  className="hover-p"
                >
                  Jharkhand
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Karnataka")}
                  className="hover-p"
                >
                  Karnataka
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Kerala")}
                  className="hover-p"
                >
                  Kerala
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Madhya Pradesh")}
                  className="hover-p"
                >
                  Madhya Pradesh
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Maharashtra")}
                  className="hover-p"
                >
                  Maharashtra
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Chandigarh")}
                  className="hover-p"
                >
                  Chandigarh
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Daman and Diu")}
                  className="hover-p"
                >
                  Daman & Diu
                </p>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled mb-0">
              <li>
                <p
                  onClick={(event) => click(event, "Manipur")}
                  className="hover-p"
                >
                  Manipur
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Meghalaya")}
                  className="hover-p"
                >
                  Meghalaya
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Mizoram")}
                  className="hover-p"
                >
                  Mizoram
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Nagaland")}
                  className="hover-p"
                >
                  Nagaland
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Odisha")}
                  className="hover-p"
                >
                  Odisha
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Punjab")}
                  className="hover-p"
                >
                  Punjab
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Rajasthan")}
                  className="hover-p"
                >
                  Rajasthan
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Jammu & Kashmir")}
                  className="hover-p"
                >
                  Jammu & Kashmir
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Ladakh")}
                  className="hover-p"
                >
                  Ladakh
                </p>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled mb-0">
              <li>
                <p
                  onClick={(event) => click(event, "Sikkim")}
                  className="hover-p"
                >
                  Sikkim
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Tamil Nadu")}
                  className="hover-p"
                >
                  Tamil Nadu
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Telangana")}
                  className="hover-p"
                >
                  Telangana
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Tripura")}
                  className="hover-p"
                >
                  Tripura
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Uttarakhand")}
                  className="hover-p"
                >
                  Uttarakhand
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Uttar Pradesh")}
                  className="hover-p"
                >
                  Uttar Pradesh
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "West Bengal")}
                  className="hover-p"
                >
                  West Bengal
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Lakshadweep")}
                  className="hover-p"
                >
                  Lakshadweep
                </p>
              </li>
              <li>
                <p
                  onClick={(event) => click(event, "Puducherry")}
                  className="hover-p"
                >
                  Puducherry
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="mo">Not Decided Yet?</h3>
          <h3 className="mo2" onClick={props.handleclose}>
            Explore More!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Popup;
