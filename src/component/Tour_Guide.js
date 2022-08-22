import React from "react";
import img3 from "./images/img2.PNG";
import loc from "./images/Loaction.png";
import call from "./images/call.png";
import "./Tour.css";
function Tour_Guide() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-7 div1234">
            <div>
              <h4 className="text123">Join the easy way of Travelling</h4>
              <p className="design123"> Get your tour guide for </p>
              <p className=" org">Hassle-Free Journey</p>
              <p className="szm123">
                Get a companion who will provide assistance, information on
                cultural, historical and contemporary heritage to you on
                organized sightseeing and at educational establishments,
                religious and historical sites.
              </p>
            </div>
          </div>
          <div className="col-sm-5 div2">
            <div className="orange-box31">
              <div>
                <img src={img3} height={400} alt="..." className="right"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="touch">Get in touch</p>
            <p className="touch-details">
              Guides may help you in exploring around in a better way . Guides
              will also tell you about excursions, attraction, things to see ,
              activities to enjoy , best itineraries as per your timings & much
              more. But please ensure that you are hiring a government approved
              guide. You can ask guide to show his / her identity card if not
              satisfied then you may contact to the govt tourist offices.
            </p>
          </div>
          <div className="col-6 div-guide">
            <p className="touch-det">
              Get in touch by Email or Call on the address given below to Find a
              Government approved tour guide.
            </p>
            <p className="touch-det123">
              <img src={loc} alt=".." className="call"></img> 191, Mall Road,
              Agra - 282001
              <br></br> <img src={call} alt=".." className="call"></img> Tel :
              (+91) 562 - 2226378
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tour_Guide;
