import React from "react";
import Img from "./Img";
import { Carousel } from "antd";
import { Container } from "./style";

const Slider = () => {
  return (
    <Container>
      <Carousel dots>
        <Img />
        <Img />
        <Img />
        <Img />
      </Carousel>
    </Container>
  );
};

export default Slider;
