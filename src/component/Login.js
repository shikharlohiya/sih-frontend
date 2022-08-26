import React, { useState } from "react";
import signimg from "./images/signup.png";
import "./signup.css";
import { Link, Navigate, NavLink } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../home";
import { GoogleLogin } from "react-google-login";
import MainPage from "./MainPage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userActions } from "../store/UserSlice";
import geo from "../component/Locate";

const Login = () => {
  const location = geo();

  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();
  const handlechange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const successMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const responseSucessGoogle = (response) => {
    console.log(response);
    axios({
      mathod: "POST",
      url: "http://localhost/api/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      console.log(response);
    });
  };
  const responseErrorGoogle = (response) => {};

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
          dispatch(userActions.updateUserStatus(true));
        }
      })
      .catch(console.log("signin request failed"));
  };
  const performRedirect = () => {
    if (didRedirect) {
      if (user) {
        return <Navigate to="/Visit"></Navigate>;
      } else {
        return <p>redirect failed</p>;
      }
    }
  };

  const signInForm = () => {
    return (
      <div className="main color-white-1">
        <div class="container mar-side">
          <div class="row">
            <div class="col-sm-5 bg-grd ">
              <p className="side-reg">A few clicks away from creating your</p>{" "}
              <p className="side-reg2">memorable journey.</p>
            </div>
            <div class="col-sm-7">
              <form className="form">
                <p className="reg-name">Login</p>
                <p className="reg-desc">
                  Welcome back! Please login to your account to continue.
                </p>
                <div class="form-group">
                  <label for="email" className="lb">
                    Email
                  </label>
                  <input
                    onChange={handlechange("email")}
                    value={email}
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div class="form-group">
                  <label for="password" className="lb">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={handlechange("password")}
                    type="password"
                    class="form-control"
                    id="Password"
                    placeholder="********"
                  />
                </div>

                <div className="mar-left3">
                  <button type="button" onClick={onSubmit} class="btn but">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="di">
                <h6 className=" mar-left3 disp-in"> Don't Have an Account?</h6>
                <NavLink to={"/Signup"} className="sig">
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {errorMessage()}
      {signInForm()}

      {successMessage()}

      {/* <> */}
      {/* <h1>login with google</h1>
          <GoogleLogin
            clientId="770410488707-l26b3qoq3pvcco7je1dv2jkm5fcjum1g.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseSucessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
          
        </> */}

      {performRedirect()}
    </>
  );
};
export default Login;
