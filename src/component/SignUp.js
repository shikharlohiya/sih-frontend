import React from "react";
import "./signup.css";
import signimg from "./images/signup.png";
import { useState } from "react";
import { signup } from "../home";
import { Link, NavLink, useNavigate } from "react-router-dom";
import temp1 from "./temp1.jpg";
const SignUp = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    error: "",
    success: false,
  });
  const { name, email, password, confirmpassword, error, success } = values;

  const handlechange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, confirmpassword })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, sucess: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            error: "",
            success: true,
            data: data,
          });
        }
      })
      .catch(console.log("error in signup"));
  };
  const signUpForm = () => {
    return (
      <div className="color-white-1">
        <div class="container mar-side">
          <div class="row">
            <div class="col-sm-5 bg-grd">
              <p className="side-reg">A few clicks away from creating your</p>{" "}
              <p className="side-reg2">memorable journey.</p>
            </div>
            <div class="col-sm-7">
              <form className="form">
                <p className="reg-name">Register</p>
                <p className="reg-desc">
                  Let’s get you all set up so you can verify your personal
                  account and begin setting up your profile.
                </p>
                <div class="form-group">
                  <label for="email" className="lb">
                    Email
                  </label>
                  <input
                    value={email}
                    type="email"
                    onChange={handlechange("email")}
                    class="form-control"
                    id="email"
                  />
                </div>
                <div class="form-group">
                  <label for="name" className="lb">
                    Name
                  </label>
                  <input
                    type="text"
                    onChange={handlechange("name")}
                    class="form-control"
                    value={name}
                    id="name"
                  />
                </div>
                <div class="form-group">
                  <label for="password" className="lb">
                    Password
                  </label>
                  <input
                    value={password}
                    type="password"
                    onChange={handlechange("password")}
                    class="form-control"
                    id="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="cpassword" className="lb">
                    Confirm Password
                  </label>
                  <input
                    value={confirmpassword}
                    type="password"
                    onChange={handlechange("confirmpassword")}
                    class="form-control"
                    id="cpassword"
                  />
                </div>
                <div class="mar-left3">
                  <button onClick={onSubmit} type="button" class="btn but">
                    Create Account
                  </button>
                </div>
              </form>
              <div className="di">
                <h6 className="mar-left3 disp-in"> Already Have an Account?</h6>
                <NavLink to={"/login"} className="sig">
                  Log In
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const successMessage = () => {
    if (success) {
      navigate("/otp", { state: { data: values.data } });
    }
    return (
      <div
        className="alert alert-success"
        style={{ display: success ? "" : "none" }}
      >
        OTP Sent To Your Registred Email
      </div>
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

  return (
    <>
      {successMessage()}
      {errorMessage()}

      {signUpForm()}
    </>
  );
};
export default SignUp;
