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
        <h3 className="mo">Select State</h3>
        <div className="row">
          <div className="col-3">
            <ul className="list-unstyled mb-0">
              <li>
                <p onClick={(event) => click(event, "Agra")}>Agra</p>
              </li>
              <li>
                <p>Arunachal Pradesh</p>
              </li>
              <li>
                <p>Assam</p>
              </li>
              <li>
                <p>Bihar</p>
              </li>
              <li>
                <p>Chattisgarh</p>
              </li>
              <li>
                <p>Goa</p>
              </li>
              <li>
                <p>Gujrat</p>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled mb-0">
              <li>
                <p>Haryana</p>
              </li>
              <li>
                <p>Himachal Pradesh</p>
              </li>
              <li>
                <p>Jharkhand</p>
              </li>
              <li>
                <p>Karnataka</p>
              </li>
              <li>
                <p>Kerala</p>
              </li>
              <li>
                <p>Madhya Pradesh</p>
              </li>
              <li>
                <p>Maharashtra</p>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled mb-0">
              <li>
                <p>Manipur</p>
              </li>
              <li>
                <p>Meghalaya</p>
              </li>
              <li>
                <p>Mizoram</p>
              </li>
              <li>
                <p>Nagaland</p>
              </li>
              <li>
                <p>Odisha</p>
              </li>
              <li>
                <p>Punjab</p>
              </li>
              <li>
                <p>Rajasthan</p>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled mb-0">
              <li>
                <p>Sikkim</p>
              </li>
              <li>
                <p>Tamil Nadu</p>
              </li>
              <li>
                <p>Telangana</p>
              </li>
              <li>
                <p>Tripura</p>
              </li>
              <li>
                <p>Uttarakhand</p>
              </li>
              <li>
                <p>Uttar Pradesh</p>
              </li>
              <li>
                <p>West Bengal</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="mo">Not Decided Yet?</h3>
          <h3 className="mo" onClick={props.handleclose}>
            Explore More!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Popup;
