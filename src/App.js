import "./App.css";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import MainPage from "./component/MainPage.js";
import SignUp from "./component/SignUp.js";
import Login from "./component/Login";
import Visit from "./component/Visit";
import Cart from "./component/Cart";
import { API } from "../src/backend";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ticket from "./component/temp";
function App() {
  console.log("API IS", API);

  return (
    <div className="main">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Visit" element={<Visit />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/temp" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
