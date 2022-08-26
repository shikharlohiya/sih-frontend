import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Tooltip from "@mui/material/Tooltip";
import MicIcon from "@mui/icons-material/Mic";
import "./Header.css";
import ModalComponent from "./ModalComponent";
import SpeechContent from "./SpeechContent";
const mystyle = {
  backgroundColor: "#FFFFFF",
};
export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {}, [isLoggedIn]);
  return (
    <>
      <nav className="navbar navbar-expand-md pop" style={mystyle}>
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li
              className="nav-item  mar login-home"
              onClick={() => navigate("/")}
            >
              <h3 className="tic">Tic</h3> <h3 className="dash">-</h3>
              <h3 className="cket">Cket</h3>
            </li>

            <li className="nav-item mar item1" id="visit">
              <NavLink to={"/visit"}>Visit</NavLink>
            </li>
            <li className="nav-item mar item1" id="guide">
              <NavLink to={"/Tour"}>Tour Guide</NavLink>
            </li>
            <li className="nav-item mar item1" style={{ marginTop: 0 }}>
              <a
                className="nav-link "
                style={{ color: "black" }}
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
            {!isLoggedIn ? (
              <>
                <li className="nav-item" style={{ marginTop: 0 }}>
                  <NavLink
                    to={"/Login"}
                    className={(isActive) =>
                      "nav-link" + (!isActive ? " unselected" : "")
                    }
                  >
                    Log In
                  </NavLink>
                </li>
                <li className="nav-item" style={{ marginTop: 0 }}>
                  <NavLink
                    to={"/SignUp"}
                    className={(isActive) =>
                      "nav-link" + (!isActive ? " unselected" : "")
                    }
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item header-profile">
                  <NavLink to="/Cart" id="cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </NavLink>
                </li>
                <li className="header-profile">
                  <NavLink to="/profile">
                    <PersonPinIcon />
                  </NavLink>
                </li>
                <li
                  className="nav-item header-profile"
                  onClick={() => setShow(true)}
                >
                  <Tooltip title="Enable Voice Command">
                    <MicIcon className="voice-icon" />
                  </Tooltip>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <Outlet />
      <ModalComponent show={show} onHide={handleClose}>
        <SpeechContent />
      </ModalComponent>
    </>
  );
}
