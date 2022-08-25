import React, { useEffect, useState } from "react";
import "./profile.css";
import avatar from "./images/avatar.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useDispatch, useSelector } from "react-redux";
import { getTicket, getUserProfile, upDateUserProfile } from "../store/API";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { userActions } from "../store/UserSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.ticket);
  const navigate = useNavigate();

  const [value, setValue] = useState({
    id: JSON.parse(localStorage.getItem("jwt")).user._id,
    name: userProfile.name,
    lastname: userProfile.lastname,
    email: userProfile.email,
    mobile: userProfile.mobile,
    gender: userProfile.gender,
    idNumber: userProfile.idNumber,
  });
  useEffect(() => {
    setValue({
      id: JSON.parse(localStorage.getItem("jwt")).user._id,
      name: userProfile.name,
      lastname: userProfile.lastname,
      email: userProfile.email,
      mobile: userProfile.mobile,
      gender: userProfile.gender,
      idNumber: userProfile.idNumber,
    });
  }, [userProfile]);
  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(getTicket());
  }, []);

  const handleChange = (e) => {
    setValue((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(upDateUserProfile(value));
  };

  const handleSignout = () => {
    localStorage.removeItem("jwt");
    dispatch(userActions.updateUserStatus(false));
    navigate("/");
  };
  return (
    <div>
      <div className="profile-div">
        <img src={avatar} alt=".." className="avatar"></img>
        <p className="profile123">Hi, {value.name}</p>
      </div>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>My Profile</Tab>
          <Tab>Bookings</Tab>
          <Tab>Points</Tab>
          <Tab onClick={handleSignout}>Sign Out</Tab>
        </TabList>
        <TabPanel>
          <div className="heading-tab">
            <p className="my-det">My Details</p>
            <hr></hr>
          </div>
          <p className="det-prof">First Name {value.name}</p>
          <p className="det-prof">Last Name {value.lastname}</p>
          <p className="det-prof">Mobile No {value.mobile}</p>
          <p className="det-prof">Email Id {value.email}</p>
          <p className="det-prof">Gender {value.gender}</p>
          <p className="det-prof">identiy {value.idNumber}</p>
          <div className="heading-tab">
            <p className="my-det">Bookings</p>
            <hr></hr>
          </div>
          <div className="my-bookings">
            {data?.map((item) => {
              return (
                <div className="ticket-cont">
                  <div className="ticket-image">
                    <img
                      src={`${process.env.REACT_APP_BACKEND}/${item.monumentId.img}`}
                      className="cart-img123"
                    ></img>
                  </div>
                  <div className="ticket-details">
                    <p className="suc-det">
                      {item.monumentId.name},{item.monumentId.stateUT}
                    </p>
                  </div>
                  <div className="ticket-actions">
                    <button
                      className="view-ticket-btn"
                      onClick={() => {
                        navigate("/get-ticket/", {
                          state: {
                            data: item,
                          },
                        });
                      }}
                    >
                      View Ticket
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="temp123-1">
            <p className="points">0 Points</p>
            <p className="points1">
              Get rewards after every visit and use them on your next.
            </p>
          </div>
          <div className="temp1234-1">
            <div className="heading-tab">
              <p className="my-det">Points Activity</p>
              <hr></hr>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="heading-tab">
            <p className="my-det">My Details</p>
            <hr></hr>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="user-info">
              <div className="">
                {/* <label htmlFor="name">First Name</label> */}
                <TextField
                  required
                  id="name"
                  label="First Name"
                  variant="outlined"
                  value={value.name}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                {/* Last Name Agrawal */}
                <TextField
                  required
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  variant="outlined"
                  value={value.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="user-info">
              <div className="">
                {/* Mobile No {value.mobile} */}
                <TextField
                  required
                  id="mobile"
                  label="Mobile No"
                  name="mobile"
                  variant="outlined"
                  value={value.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                {/* Email Id  */}
                {/* {value.email} */}
                <TextField
                  required
                  id="email"
                  label="Email Id"
                  variant="outlined"
                  value={value.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="user-info">
              <div className="">
                {/* Gender  */}
                <FormControl sx={{ m: 0, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value.gender}
                    label="Gender"
                    onChange={handleChange}
                    name="gender"
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="">
                {/* identiy */}
                {/* {value.idNumber} */}
                <TextField
                  required
                  id="idNumber"
                  name="idNumber"
                  label="identity"
                  variant="outlined"
                  value={value.idNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="user-info-btn">
              <button className="view-ticket-btn" type="submit">
                Save
              </button>
            </div>
          </form>
        </TabPanel>

        <TabPanel>
          <div className="heading-tab">
            <p className="my-det">Bookings</p>
            <hr></hr>
          </div>
          <div className="my-bookings">
            {data?.map((item) => {
              return (
                <div className="ticket-cont">
                  <div className="ticket-image">
                    <img
                      src={`${process.env.REACT_APP_BACKEND}/${item.monumentId.img}`}
                      className="cart-img123"
                    ></img>
                  </div>
                  <div className="ticket-details">
                    <p className="suc-det">
                      {item.monumentId.name},{item.monumentId.stateUT}
                    </p>
                  </div>
                  <div className="ticket-actions">
                    <button
                      className="view-ticket-btn"
                      onClick={() => {
                        navigate("/get-ticket/", {
                          state: {
                            data: item,
                          },
                        });
                      }}
                    >
                      View Ticket
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="temp123">
            <p className="points">0 Points</p>
            <p className="points1">
              Get rewards after every visit and use them on your next.
            </p>
          </div>
          <div className="temp1234">
            <div className="heading-tab">
              <p className="my-det">Points Activity</p>
              <hr></hr>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
