/* eslint-disable no-console */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Notifications from "react-notify-toast";

import Language from "configs/Language";
import CONFIG from "constants/notifications";
import moment from "moment-timezone";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "styles/customBootstrap.css";
import "styles/main.css";

moment.tz.setDefault("America/Buenos_Aires");
moment.locale(localStorage.getItem("i18nextLng") || "en");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Language>
        <Notifications options={CONFIG} />
        <App />
      </Language>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
