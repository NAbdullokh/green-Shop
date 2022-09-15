import React from "react";
import { useNavigate } from "react-router-dom";
import { Body, Container, EachIcon, IconWrap } from "./style";

const Card = ({ value }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/shop/${value.id}`)}>
      <Container.Img
        src={`https://futurecommunication.pythonanywhere.com${value.images.image}`}
      />
      <Body>
        <Body.Title>{value.title}</Body.Title>
        <Body.Price>$ {value.price}.00</Body.Price>
        <IconWrap>
          <EachIcon>
            <IconWrap.Cart />
          </EachIcon>

          <EachIcon>
            <IconWrap.Like />
          </EachIcon>

          <EachIcon>
            <IconWrap.Search />
          </EachIcon>
        </IconWrap>
      </Body>
    </Container>
  );
};

export default Card;
