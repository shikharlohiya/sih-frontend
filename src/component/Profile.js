import React from "react";
import "./profile.css";
import avatar from "./images/avatar.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Profile() {
  return (
    <div>
      <div className="profile-div">
        <img src={avatar} alt=".." className="avatar"></img>
        <p className="profile123">Hi, Vedika</p>
      </div>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>My Profile</Tab>
          <Tab>Bookings</Tab>
          <Tab>Points</Tab>
          <Tab>Sign Out</Tab>
        </TabList>
        <TabPanel>
          <p className="my-det">My Details</p>
          <hr></hr>
          <p className="det-prof">First Name Vedika</p>
          <p className="det-prof">Last Name Agrawal</p>
          <p className="det-prof">Mobile No 9131594790</p>
          <p className="det-prof">Email Id abhishek@gmail.com</p>
          <p className="det-prof">Gender Male</p>
          <p className="det-prof">DOB 123456</p>
          <p className="det-prof">identiy 1234656789</p>
          <p className="my-det">Bookings</p>
          <hr></hr>
          <div className="temp123">
            <p className="points">0 Points</p>
            <p className="points1">
              Get rewards after every visit and use them on your next.
            </p>
          </div>
          <div className="temp1234">
            <p className="my-det">Points Activity</p>
            <hr></hr>
          </div>
        </TabPanel>
        <TabPanel>
          <p className="my-det">My Details</p>
          <hr></hr>
          <p className="det-prof">First Name Vedika</p>
          <p className="det-prof">Last Name Agrawal</p>
          <p className="det-prof">Mobile No 9131594790</p>
          <p className="det-prof">Email Id abhishek@gmail.com</p>
          <p className="det-prof">Gender Male</p>
          <p className="det-prof">DOB 123456</p>
          <p className="det-prof">identiy 1234656789</p>
        </TabPanel>

        <TabPanel>
          <p className="my-det">Bookings</p>
          <hr></hr>
        </TabPanel>
        <TabPanel>
          <div className="temp123">
            <p className="points">0 Points</p>
            <p className="points1">
              Get rewards after every visit and use them on your next.
            </p>
          </div>
          <div className="temp1234">
            <p className="my-det">Points Activity</p>
            <hr></hr>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}
