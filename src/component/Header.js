import React from "react";
import "./Header.css";
const mystyle = {
  backgroundColor: "#FFF8EF",
};
export default function header() {
  return (
    <nav className="navbar navbar-expand-md pop" style={mystyle}>
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item active mar">
            <a className="navbar-brand" href="#">
              Tic-Cket
            </a>
          </li>

          <li className="nav-item mar">
            <a className="nav-link bold" href="/">
              Home
            </a>
          </li>

          <li className="nav-item mar">
            <a className="nav-link" href="#">
              My Profile
            </a>
          </li>
          <li className="nav-item mar">
            <a className="nav-link" href="#">
              Tour Guide
            </a>
          </li>
          <li className="nav-item mar">
            <a className="nav-link" href="#">
              360 Degree View
            </a>
          </li>
          <li className="nav-item mar">
            <a className="nav-link" href="#">
              How To Use
            </a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/Cart" className="nav-link">
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Login">
              Log In
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/SignUp">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
