import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resendOtp, submitOtp } from "../store/API";
import { useDispatch } from "react-redux";
import "./Otp.css";
export default function OTP() {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleSubmit = () => {
    dispatch(submitOtp({ otp, data: location.state.data, navigate }));
  };
  const handleResend = () => {
    dispatch(resendOtp(location.state.data.id));
  };
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
        <input
          type={"number"}
          className="otp-input"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        ></input>
      </form>
      <button className="otp-cont" onClick={handleSubmit}>
        Continue
      </button>
      <p className="otp-resend" onClick={handleResend}>
        Resend OTP
      </p>
    </div>
  );
}
