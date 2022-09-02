import React from "react";
import { useNavigate } from "react-router-dom";
import { Body, Container, EachIcon, IconWrap } from "./style";

const Card = ({ data }) => {
  console.log(data);
  const navigate = useNavigate();
  return (
    <Container>
      <Container.Img
        onClick={() => navigate(`/shop/${data.id}`)}
        src={data.img}
      />
      <Body>
        <Body.Title>{data.title}</Body.Title>
        <Body.Price>{data.price}</Body.Price>
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
