import "react-notifications-component/dist/theme.css";
import "./App.css";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import MainPage from "./component/MainPage.js";
import SignUp from "./component/SignUp.js";
import Login from "./component/Login";
import Visit from "./component/Visit";
import Cart from "./component/Cart";
import Tour from "./component/Tour_Guide";
import Profile from "./component/Profile";
import { API } from "../src/backend";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ticket from "./component/temp";
import Stripe from "./component/Stripe";
import TicketPdf from "./TicketPdf";
import AllTicket from "./component/pages/AllTicket";
import Use from "./component/howToUse";
import Exp from "./component/explore";
import Dash from "./component/Dahboard";
import Otp from "./component/OTP";
export const notifications = {
  message: "teodosii@react-notifications-component",
  type: "success",
  insert: "top",
  showIcon: true,
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 1000,
    onScreen: true,
  },
  dismissable: { click: true },
};
function App() {
  console.log("API IS", API);

  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Visit" element={<Visit />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/temp" element={<Ticket />} />
            <Route path="/ticket" element={<TicketPdf />} />
            <Route path="/all-ticket" element={<AllTicket />} />
            <Route path="/get-ticket/" element={<TicketPdf />} />
            <Route path="/Stripe" element={<Stripe />} />
            <Route path="/Tour" element={<Tour />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Exp />} />
            <Route path="/how-to-use" element={<Use />} />
            <Route path="/dashboard" element={<Dash />} />
            <Route path="/otp" element={<Otp />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
