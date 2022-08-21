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
              <NavLink to={"/visit"}>Visit</NavLink>
            </li>

            <li className="nav-item mar item1">
              <NavLink to="/profile">My Profile</NavLink>
            </li>
            <li className="nav-item mar item1">
              <NavLink to="/Tour">Tour Guide</NavLink>
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
              <NavLink to="/how-to-use">How To Use</NavLink>
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
              <NavLink
                to={"/SignUp"}
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
