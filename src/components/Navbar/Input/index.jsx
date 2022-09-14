import React, { useEffect, useState } from "react";
import { Container, InputWrapper } from "./style";
import { BsSearch } from "react-icons/bs";
import Nav from "../../Hamburger/index";
import useSearch from "../../../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../../Loader/Loader.jsx";

const NavbatInput = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    AllFetchingData();
  }, []);

  const getSearch = async () => {
    if (text !== "") {
      await axios
        .get(
          `https://futurecommunication.pythonanywhere.com/api/v1/product/?search=${text}`
        )
        .then((res) => setData(res?.data?.results));
    } else {
      AllFetchingData();
    }
  };

  return (
    <Container>
      <InputWrapper>
        <BsSearch className="search-icon" />
        <InputWrapper.Input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Find your plants"
        />
      </InputWrapper>
      <button onClick={getSearch}>Search</button>
      <Nav />
    </Container>
  );
};

export default NavbatInput;
