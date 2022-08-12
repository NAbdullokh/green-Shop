import React from "react";
import Img from "./Img";
import { Carousel } from "antd";

const Slider = () => {
  return (
    <div>
      <Carousel dots>
        <Img />
        <Img />
        <Img />
        <Img />
      </Carousel>
    </div>
  );
};

export default Slider;
