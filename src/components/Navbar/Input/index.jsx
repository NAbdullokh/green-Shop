import React from "react";
import { Container, InputWrapper } from "./style";
import { BsSearch } from "react-icons/bs";
import Nav from "../../Hamburger/index";

const NavbatInput = () => {
  return (
    <Container>
      <InputWrapper>
        <BsSearch className="search-icon" />
        <InputWrapper.Input type="text" placeholder="Find your plants" />
      </InputWrapper>
      <Nav />
    </Container>
  );
};

export default NavbatInput;
