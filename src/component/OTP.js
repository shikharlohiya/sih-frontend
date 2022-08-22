import React from "react";

import "./Otp.css";
export default function OTP() {
  return (
    <div className="div-otp">
      <p className="auth-req">Authentication required</p>
      <p className="xyz-1">xyz@gmail.com</p>
      <p className="btn-change">Change</p>
      <p className="otp-desc">
        We’ve sent an One Time Password(OTP) to the email ID above. Please enter
        it to complete verification.
      </p>

      <form>
        <label className="otp-label">Enter OTP</label>
        <input type={"text"} className="otp-input"></input>
      </form>
      <button className="otp-cont">Continue</button>
      <p className="otp-resend">Resend OTP</p>
    </div>
  );
}
