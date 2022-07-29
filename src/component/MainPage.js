import React from "react";
import "./MainPage.css";
import tajmahal from "./images/tajmahal.jpg";
import charminar from "./images/charminar.jpg";
import hawamahal from "./images/hawamahal.jpg";
import bgimg from "./images/bgimg.png";
import img from "./images/img.PNG";
import img2 from "./images/img2.PNG";
import img3 from "./images/img3.png";
export default function MainPage() {
  return (
    <>
      <div className="main">
        <div className="section1 container">
          <div className="row">
            <div className="col-sm-8 div1">
              <div className="val">
                <h4 className="text">Join the easy way of booking Tickets</h4>
                <p className="szb meri"> Easy,Secure and </p>
                <p className="text szb meri">Hassle-Free</p>
                <p className="szm">
                  Cyber_knight’s Way of Booking Monuments Visit Pass Tickets is
                  the best way of Providing Tickets to the Customers.{" "}
                </p>
              </div>
            </div>
            <div className="col-sm-4 div2">
              <div className="orange-box3">
                <div>
                  <img
                    src={img3}
                    height={400}
                    alt="..."
                    className="right"
                  ></img>
                </div>
              </div>
            </div>

            <div className="section3 container">
              <div className="row">
                <div className="col-sm-4 div5">
                  <p className="sz3 meri">We make Your Travel Visit easy.</p>
                  <p>
                    Take a look at the Destination You Wish To Visit Without any
                    time Wasting and Decide the Place you Would Love To Visit.
                  </p>
                </div>
                <div className="col-sm-4 div6">
                  <h4 className="bold">Secure storage</h4>
                  <p>
                    We store the vast majority of the digital assets in secure
                    offline storage.
                  </p>
                  <h4 className="bold">Industry best practices</h4>
                  <p>
                    Besnik crypto supports a variety of the most popular digital
                    crypto currencies.
                  </p>
                </div>
                <div className="col-sm-4 div7">
                  <h4 className="bold">Protected by insurance</h4>
                  <p>
                    Cryptocurrency stored on our servers is covered by our
                    insurance policy.
                  </p>
                  <h4 className="bold">Trade Assets</h4>
                  <p>
                    Discover new and innovative crypto assets with over 200 spot
                    trading pairs and 25 margin.
                  </p>
                </div>
              </div>
            </div>
            <div className="section2 container">
              <div className="row">
                <div className="col-sm-6 div3">
                  <div className="orange-box">
                    <div>
                      <img
                        src={img}
                        height={500}
                        alt="..."
                        className="check2"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 div4">
                  <h4 className="text bold">
                    Reduces your time to book Tickets my 10 Times
                  </h4>
                  <h1 className="sz3 meri">
                    Acceptable over more than 180+ Destinations in India{" "}
                  </h1>
                  <p>
                    Try Out the Easiest way to Visit Monuments and start
                    exploring your dream destinations seating at the comfort of
                    your Home
                  </p>
                </div>
              </div>
            </div>
            <div className="section4 container">
              <div className="row">
                <div className="col-sm-6 div8">
                  <h4 className="text bold">
                    It’s Always Good to have Someone
                  </h4>
                  <h1 className="sz6 meri">
                    Travel With Someone Who Knows Everything
                  </h1>
                  <p>
                    Its Always Good To Have Someone Who Knows Where to Go What
                    To See and How To Go at Places You Visit, and We Make It
                    Easy for You
                  </p>
                </div>
                <div className="col-sm-6 div9">
                  <div className="orange-box2">
                    <div>
                      <img height={400} src={img2} alt=".." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
