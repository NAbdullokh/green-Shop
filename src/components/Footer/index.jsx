import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Outlet />
      <h1>Footer</h1>
    </>
  );
};

export default Footer;
