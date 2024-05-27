import React from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/HeaderFooter/HeaderPage"; 

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail_product from "./components/Detail_product";
import Cart from "./components/Cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App(props) {
  return (
    <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>

          <Routes>
            <Route path="/Product_detail" element={<Detail_product/>} />
          </Routes>
          <Routes>
            <Route path="/Cart" element={<Cart/>} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
