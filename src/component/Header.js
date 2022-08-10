import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";
const mystyle = {
  backgroundColor: "#FFF8EF",
};
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md pop" style={mystyle}>
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item active mar">
              <a className="navbar-brand" href="#">
                Tic-Cket
              </a>
            </li>

            <li className="nav-item mar">
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li className="nav-item mar">
              <a className="" href="#">
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
              <NavLink to="/Cart" id="cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/Login"}
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Log In
              </NavLink>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/SignUp">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
