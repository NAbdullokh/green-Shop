import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Card from "../Card";
import { Body, Container } from "./style";
import BackData from "../../context/context";
import Loader from "../../Loader/Loader";

const AllFlowers = () => {
  const { data, setDate, loading, setLoading } = useContext(BackData);
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
