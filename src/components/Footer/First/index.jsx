import React, { useState } from "react";
import Button from "../../../Generic/Button";
import { footerData } from "../../../mock/footerData";
import { Boxes, Container, InputBox, InputWrapper } from "./style";

const FirstFooter = () => {
  const [email, setEmail] = useState("");
  const onSend = () => {
    fetch("http://futurecommunication.pythonanywhere.com/api/v1/user-join/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((res) => res.json());
    alert("Joined");
  };
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={onSend} width="85px" height="40px" ml="-20">
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
