import React, { useContext } from "react";
import { useState } from "react";
import { Container } from "./style";
import Loader from "../../Loader/Loader";
import { BackData } from "../../context/context";
import Pagination from "./Pagination/Pagination";
import FLowerList from "./FlowerList";

const AllFlowers = () => {
  const { data, loading } = useContext(BackData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <Container>
      {loading ? <Loader /> : <FLowerList coinsData={currentPosts} />}
      <Pagination
        totalPosts={data.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default AllFlowers;
