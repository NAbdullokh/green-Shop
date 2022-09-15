import React from "react";
import Card from "../../Card";
import { Container } from "./style";

const FLowerList = ({ coinsData }) => {
  return (
    <Container>
      {coinsData.map((data, index) => {
        return <Card key={index} value={data} />;
      })}
    </Container>
  );
};

export default FLowerList;
