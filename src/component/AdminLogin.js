import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import "./AdminLogin.css";
import logo from "../icon/tic.svg";
import { adminLogin } from "../store/API";
import { useDispatch } from "react-redux";
import { signin } from "../home";
import { useNavigate } from "react-router-dom";
export default function AdminLogin() {
  const dispatch = useDispatch();
  const [userType, setUserType] = useState();
  const [id, setID] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUserType(e.target.value);
  };
  const handleSubmit = () => {
    if (!userType || !id | !password) alert("ALL Field are mandatory");
    dispatch(
      adminLogin(
        adminLogin({
          email: id,
          userType: userType,
          password: password,
          navigate: navigate,
        })
      )
    );
  };
  return (
    <div className="login-div">
      <div>
        <img src={logo} />
      </div>
      <div>Admin Login</div>
      <div className="login-field">
        +
        <div>
          <div className="d-flex justify-content-between mb-4">
            <div className="mx-4">Admin Type: </div>
            <div>
              <Box sx={{ minWidth: 220 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userType}
                    label="Select"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Super Admin"}>Super Admin</MenuItem>
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                    <MenuItem value={"Sub Admin"}>Sub Admin</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <div className="mx-4">Admin ID </div>
            <div>
              <TextField
                id="outlined-basic"
                label="ID"
                variant="outlined"
                value={id}
                onChange={(e) => setID(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <div className="mx-4">Password </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
