import React from "react";
import Adv from "../Adv";
import AllFlowers from "../AllFlowers";
import Slider from "../Carousel";
import Filter from "../Filter";
import Post from "../Posts";
import { Container } from "./style";

const Home = () => {
  return (
    <div>
      <Slider />
      <Container>
        <Filter />
        <AllFlowers />
      </Container>
      <Adv />
      <Post />
    </div>
  );
};

export default Home;
