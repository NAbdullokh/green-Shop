import React from "react";
import { Button, Container, InputWrapper } from "./style";
import { BsSearch } from "react-icons/bs";
import filter from "../../../assets/icon/filter.svg";

const NavbatInput = () => {
  return (
    <Container>
      <InputWrapper>
        <BsSearch className="search-icon" />
        <InputWrapper.Input type="text" placeholder="Find your plants" />
      </InputWrapper>
      <Button>
        <img src={filter} alt="" />
      </Button>
    </Container>
  );
};

export default NavbatInput;
