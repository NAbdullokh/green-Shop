import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card";
import { Body, Container } from "./style";

const AllFlowers = () => {
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
