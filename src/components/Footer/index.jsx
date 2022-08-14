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
      {/* <SecondFooter /> */}
      {/* <ThirdFooter /> */}
    </>
  );
};

export default Footer;
