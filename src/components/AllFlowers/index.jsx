import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card";
import { Body, Container } from "./style";

const AllFlowers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://futurecommunication.pythonanywhere.com/api/v1/product/")
      .then((res) => res.json())
      .then((res) => setData(res.results));
  }, []);
  console.log(data);
  return (
    <Container>
      {/* <Container.Title>Propertes</Container.Title> */}
      <Body>
        {data.map((value) => {
          return <Card key={value.id} data={value} />;
        })}
      </Body>
    </Container>
  );
};

export default AllFlowers;
