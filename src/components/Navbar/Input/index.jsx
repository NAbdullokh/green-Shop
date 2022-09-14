import React, { useContext, useEffect, useState } from "react";
import { Container, InputWrapper } from "./style";
import { BsSearch } from "react-icons/bs";
import Nav from "../../Hamburger/index";
import { BackData } from "../../../context/context";

const NavbatInput = () => {
  const { getSearch } = useContext(BackData);

  return (
    <Container>
      <InputWrapper>
        <BsSearch className="search-icon" />
        <InputWrapper.Input
          type="text"
          onChange={(e) => getSearch(e.target.value)}
          placeholder="Find your plants"
        />
      </InputWrapper>
      <Nav />
    </Container>
  );
};

export default NavbatInput;
