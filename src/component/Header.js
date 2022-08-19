import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";
const mystyle = {
  backgroundColor: "#FFFFFF",
};
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md pop" style={mystyle}>
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item  mar">
              <h3 className="tic">Tic</h3> <h3 className="dash">-</h3>
              <h3 className="cket">Cket</h3>
            </li>

            <li className="nav-item mar item1">
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li className="nav-item mar item1">
              <a className="" href="/profile">
                My Profile
              </a>
            </li>
            <li className="nav-item mar item1">
              <a className="nav-link " href="/Tour">
                Tour Guide
              </a>
            </li>
            <li className="nav-item mar item1">
              <a
                className="nav-link "
                href={process.env.PUBLIC_URL + "/thing to do/index.html"}
              >
                360 Degree View
              </a>
            </li>
            <li className="nav-item mar item1">
              <a className="nav-link " href="#">
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
