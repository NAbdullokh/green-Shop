import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Card from "../Card";
import { Body, Container } from "./style";
import Loader from "../../Loader/Loader";
import { BackData } from "../../context/context";
import Pagination from "./Pagination/Pagination";
import FLowerList from "./FlowerList";

const AllFlowers = () => {
  const { data, loading } = useContext(BackData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <Container>
      <Body>
        {loading ? <Loader /> : <FLowerList coinsData={currentPosts} />}
        <Pagination
          totalPosts={data.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Body>
    </Container>
  );
};

export default AllFlowers;

// data.map((value) => {
//   return <Card key={value.id} data={value} />;
