import React from "react";
import { Calling, Container, Elements } from "./style";
import logo from "../../../assets/img/logo.png";
import location from "../../../assets/icon/location.svg";
import message from "../../../assets/icon/message.svg";
import calling from "../../../assets/icon/calling.svg";

const SecondFooter = () => {
  return (
    <Container>
      <Elements>
        <Elements.Svg src={logo} alt="" />
      </Elements>

      <Elements>
        <Elements.Svg src={location} />
        <Elements.Text>
          70 West Buckingham Ave. Farmingdale, NY 11735
        </Elements.Text>
      </Elements>

      <Elements>
        <Elements.Svg src={message} />
        <Elements.Text>contact@greenshop.com</Elements.Text>
      </Elements>

      <Calling>
        <Elements.Svg src={calling} />
        <Elements.Text>+88 01911 717 490</Elements.Text>
      </Calling>
    </Container>
  );
};

export default SecondFooter;
