import React from "react";
import { useNavigate } from "react-router-dom";
import { Body, Container, EachIcon, IconWrap } from "./style";

const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/shop/${data.id}`)}>
      <Container.Img
        src={`https://futurecommunication.pythonanywhere.com${data.images.image}`}
      />
      <Body>
        <Body.Title>{data.title}</Body.Title>
        <Body.Price>$ {data.price}.00</Body.Price>
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
