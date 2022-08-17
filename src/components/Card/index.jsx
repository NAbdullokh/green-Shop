import React from "react";
import { Body, Container } from "./style";

const Card = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Container.Img src={data.img} />
      <Body>
        <Body.Title>{data.title}</Body.Title>
        <Body.Price>{data.price}</Body.Price>
      </Body>
    </Container>
  );
};

export default Card;
