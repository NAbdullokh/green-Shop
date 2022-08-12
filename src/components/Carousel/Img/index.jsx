import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../Generic/Button";
import { Box1, Box2, BtnWrapper, Container } from "./style";
import img1 from "../../../assets/img/f2.png";
import img2 from "../../../assets/img/f1.png";

const Img = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box1>
        <Box1.Subtitle>Welcome to GreenShop</Box1.Subtitle>
        <Box1.Title>
          Let’s Make a Better <span>Planet</span>
        </Box1.Title>
        <Box1.Description>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </Box1.Description>
        <Box1.Description2>
          We are an online plant shop offering a wide range
        </Box1.Description2>
        <BtnWrapper>
          <Button onClick={() => navigate("/shop")} width="140px" height="40px">
            SHOP NOW
          </Button>
        </BtnWrapper>
        <Box1.SecondBtn onClick={() => navigate("/shop")}>
          SHOP NOW
        </Box1.SecondBtn>
      </Box1>
      <Box2>
        <Box2.Img src={img1} />
        <Box2.Img2 src={img2} />
      </Box2>
    </Container>
  );
};

export default Img;
