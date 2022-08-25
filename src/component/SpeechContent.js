import React from "react";
import "./SpeechContent.css";

import mic from "../icon/mic.svg";
function SpeechContent() {
  return (
    <div className="speech-content">
      <div className="speech-first-div">
        <div className="questions-div">
          <div>Prefix with Enter to enter any details at any page. </div>
          <div>Ex: Enter name Vedika Agrawal. .</div>
        </div>
        <div className="questions-div">
          <div>Prefix with Click to click on any button. </div>
          <div>Ex: Click Book now.</div>
        </div>
        <div className="questions-div">
          <div>Prefix with Go to to navigate through pages.</div>
          <div>Ex: Go to Home</div>
        </div>
        <div className="questions-div">
          <div>Scroll Up to scroll up the page.</div>
          <div>Scroll Down to scroll down the page.</div>
        </div>
      </div>
      <div className="speech-second-div">
        <div className="wait-text">Waiting...</div>
        <div>
          <div className="mic-div-icon">
            <img src={mic} className="mic-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeechContent;
