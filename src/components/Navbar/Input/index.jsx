import React, { useEffect, useState } from "react";
import { Container, InputWrapper } from "./style";
import { BsSearch } from "react-icons/bs";
import Nav from "../../Hamburger/index";
import { useQuery } from "react-query";
import useSearch from "../../../hooks/useSearch";
import UseReplace from "../../../hooks/useReplace";
import { useNavigate } from "react-router-dom";

const NavbatInput = () => {
  const [box, setBox] = useState([]);
  const [text, setText] = useState();

  useEffect(() => {
    fetch(`https://futurecommunication.pythonanywhere.com/api/v1/product`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  }, []);

  const onChange = () => {
    if (text === "") {
      fetch(
        `https://futurecommunication.pythonanywhere.com/api/v1/product/${text}`
      )
        .then((res) => res.json())
        .then((res) => setBox(res));
    }
  };

  console.log(box, "data");
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
      <button onClick={onChange}>search</button>
      <Nav />
    </Container>
  );
};

export default NavbatInput;
