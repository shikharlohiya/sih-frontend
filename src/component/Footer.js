import React from "react";
import "./MainPage.css";
export default function Footer() {
  return (
    <>
      <div className="p-4 pb-0 footer pop">
        <section className="">
          <div className="row footer1">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Tic-Cket</h5>

              <p>
                Through many of its unique properties, Tic -Cket allows exciting
                uses that could not be covered by any previous Ticketing system.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Important Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">Agent Contact</a>
                </li>
                <li>
                  <a href="#!">Services</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Resources</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Prices</a>
                </li>
                <li>
                  <a href="#!">Tax</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">Support</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Get in Touch</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <p>Question or feedback? We’d love to hear from you.</p>
                </li>
                <li>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="check"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="mb-4" />
      </div>
    </>
  );
}
