import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./root";
import "antd/dist/antd.css";
import Context from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <Root />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
