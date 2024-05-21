import React from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
