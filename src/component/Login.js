import React, { useState } from "react";
import signimg from "./images/signup.png";
import "./signup.css";
import {Link, Navigate} from "react-router-dom";
import { signin , authenticate, isAuthenticated } from "../home";
import MainPage from "./MainPage";
const  Login =()=> {

const [values,setValues] = useState({
  email: "",
  password: "",
  error : "",
  loading: false,
  didRedirect: false
})
const {email, password , error, loading, didRedirect}= values
const {user}= isAuthenticated();
const handlechange = name => event =>{
  setValues({...values,error:false, [name]:event.target.value})
}

const successMessage = ()=>{
  return(
  loading &&(
    <div className="alert alert-info">
      <h2>Loading...</h2>
    </div>
  )
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

const onSubmit = event =>{
  event.preventDefault();
  setValues({...values,error: false, loading: true})
  signin({email,password})
  .then(data =>{
    if(data.error){
      setValues({...values,error: data.error, loading: false})
    }else{
         authenticate(data, ()=>{
          setValues({
            ...values,
            didRedirect: true
          })
         })
    }
  })
  .catch(console.log("signin request failed"))

}
const performRedirect =()=>{
  if(didRedirect){
    if(user){
      return <Navigate to="/"></Navigate>
    }else{
      return <p>redirect failed</p>
    }
  }
  

}

const signInForm =()=>{

  return (
    <div className="main">
      <div class="container">
        <h2 className="d-flex justify-content-center b meri mg">
          Welcome Back
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

              <div class="d-flex justify-content-center">
                <button type="button" onClick={onSubmit} class="btn but">
                  Sign In
                </button>
              </div>
            </form>
            <div className="di">
              <h6 className="acc"> Don't Have an Account?</h6>
              <a href="/Signup" className="sig">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
return (
  <>
  { errorMessage()}
  {signInForm()}
 { successMessage()}
 { performRedirect() }
 

  </>

)
}
export default Login;