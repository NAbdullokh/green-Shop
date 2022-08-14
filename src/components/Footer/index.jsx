import React from "react";
import { Outlet } from "react-router-dom";
import FirstFooter from "./First";
import SecondFooter from "./Second";
import ThirdFooter from "./Third";

const Footer = () => {
  return (
    <>
      <Outlet />
      <FirstFooter />
      <SecondFooter />
      <ThirdFooter />
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        © 2021 GreenShop. All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;
