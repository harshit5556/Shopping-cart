import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import {Toaster} from "react-hot-toast";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //link redux and react
  <BrowserRouter>
  <Provider store = {store}>
    <App/>
    <Toaster/>
  </Provider>
  </BrowserRouter>
);
