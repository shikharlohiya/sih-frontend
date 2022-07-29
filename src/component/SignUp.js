import React from "react";
import "./signup.css";
import signimg from "./images/signup.png";
import { useState } from "react";
import { signup } from "../home";
import { Link } from "react-router-dom";
const SignUp=()=> {

const [values , setValues] = useState({
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
  error: "",
  success: false
});
const {name, email, password,confirmpassword, error, success}= values

const handlechange = name => event =>{
  setValues({...values,error:false, [name]:event.target.value})
}
const onSubmit = event =>{
  event.preventDefault()
  setValues({...values,error:false})
  signup({name,email,password, confirmpassword})
  .then(data=>{
    if(data.error){
      setValues({...values, error: data.error, sucess:false})
    }else{
      setValues({
        ...values,
        name: "",
        email: "",
        password: "",
        confirmpassword : "",
        error: "",
        success: true
      });
    }
  })
  .catch(console.log("error in signup"))

}
const signUpForm =() =>{
  return (

    <div className="main">
      <div class="container">
        <h2 className="d-flex justify-content-center b meri mg">
          Getting Started.
        </h2>
        <div class="row">
          <div class="col-sm-6 ">
            <div className="orange-box form">
              <div>
                <img src={signimg} alt="..." height={400}></img>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <form className="form">
              <div class="form-group">
                <label for="email" className="lb">
                  Email
                </label>
                <input
                  value={email}
                  type="email"  onChange={handlechange("email")}
                  class="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="form-group">
                <label for="name" className="lb">
                  Name
                </label>
                <input
                  type="text" onChange={handlechange("name")}
                  class="form-control"
                  value={name}
                  id="name"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div class="form-group">
                <label for="password" className="lb">
                  Password
                </label>
                <input
                value={password}
                  type="password"  onChange={handlechange("password")}
                  class="form-control"
                  id="Password"
                  placeholder="********"
                />
              </div>
              <div class="form-group">
                <label for="cpassword" className="lb">
                  Confirm Password
                </label>
                <input
                  value={confirmpassword}
                  type="password"  onChange={handlechange("confirmpassword")}
                  class="form-control"
                  id="cpassword"
                  placeholder="********"
                />
              </div>
              <div class="d-flex justify-content-center">
                <button onClick={onSubmit} type="button" class="btn but">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="di">
              <h6 className="acc"> Already Have an Account?</h6>
              <a href="/login" className="sig">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const successMessage = ()=>{
  return(
  <div className = "alert alert-success"
  style = {{display: success ? "" : "none"}}
  >
    New account was created successfully.please <Link to="/signin">login here</Link>
  </div>
  )
}
 const errorMessage = ()=>{
  return(
  <div className = "alert alert-danger"
  style = {{display: error ? "" : "none"}}
  >
    {error}
  </div>
  )
}



return(
  <>
  {successMessage()}
  {errorMessage()}

  {signUpForm()}
  

  </>
  
)

}
export default SignUp;
