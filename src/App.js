import "./App.css";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import MainPage from "./component/MainPage.js";
import SignUp from "./component/SignUp.js";
import Login from "./component/Login";
import {API } from "../src/backend";

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
