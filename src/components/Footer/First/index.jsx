import React from "react";
import Button from "../../../Generic/Button";
import { footerData } from "../../../mock/footerData";
import { Boxes, Container, InputBox, InputWrapper } from "./style";

const FirstFooter = () => {
  return (
    <Container>
      {footerData.map((value) => {
        return (
          <Boxes key={value.id}>
            <Boxes.Img src={value.img} />
            <Boxes.Title>{value.title}</Boxes.Title>
            <Boxes.Description>{value.description}</Boxes.Description>
          </Boxes>
        );
      })}
      <InputBox>
        <Boxes.Title>Would you like to join newsletters?</Boxes.Title>
        <InputWrapper>
          <InputWrapper.Input
            type="email"
            placeholder="enter your email address..."
          />
          <Button width="85px" height="40px" ml="-20">
            Join
          </Button>
        </InputWrapper>
        <Boxes.Description>
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!{" "}
        </Boxes.Description>
      </InputBox>
    </Container>
  );
};

export default FirstFooter;
