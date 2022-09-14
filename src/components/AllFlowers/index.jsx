import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Card from "../Card";
import { Body, Container } from "./style";
import Loader from "../../Loader/Loader";
import { BackData } from "../../context/context";

const AllFlowers = () => {
  const { data, loading } = useContext(BackData);
  return (
    <Container>
      {/* <Container.Title>Propertes</Container.Title> */}
      <Body>
        {loading ? (
          <Loader />
        ) : (
          data.map((value) => {
            return <Card key={value.id} data={value} />;
          })
        )}
      </Body>
    </Container>
  );
};

export default AllFlowers;
