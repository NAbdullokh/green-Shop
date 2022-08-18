import React from "react";
import { card } from "../../mock/card";
import Card from "../Card";
import { Body, Container } from "./style";

const AllFlowers = () => {
  return (
    <Container>
      {/* <Container.Title>Propertes</Container.Title> */}
      <Body>
        {card.map((value) => {
          return <Card key={value.id} data={value} />;
        })}
      </Body>
    </Container>
  );
};

export default AllFlowers;
