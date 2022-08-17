import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  BtnWrap,
  Container,
  IconWrapper,
  ItemWrapper,
  Responsive,
  Wrapper,
} from "./style";
import logo from "../../assets/img/logo.png";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";
import Button from "../../Generic/Button";
import { useState } from "react";
import NavbatInput from "./Input";
import { secondNavItems } from "../../utils/secondNavItems";

const Navbar = ({ data }) => {
  const navigate = useNavigate();

  const [cartOpen, setCartOpen] = useState(false);

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY <= 500) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const active = ({ isActive }) => {
    return {
      borderBottom: isActive ? "3px solid #46A358" : "none",
      fontWeight: isActive ? "700" : "400",
      paddingBottom: isActive ? "26px" : "0px",
      transition: "0.5s",
      color: isActive ? "#64A358" : "black",
    };
  };

  const isactive = ({ isActive }) => {
    return {
      color: isActive ? "#64A358" : "black",
    };
  };

  const onCart = () => {
    navigate("/cart");
    setCartOpen(!cartOpen);
  };
  return (
    <>
      <Container>
        <Container.Logo onClick={() => navigate("/home")} src={logo} />
        <ItemWrapper>
          {data.map((value) => {
            return (
              !value.hidden && (
                <ItemWrapper.Items key={value.id}>
                  <NavLink style={active} to={value.path} className="link">
                    {value.title}
                  </NavLink>
                </ItemWrapper.Items>
              )
            );
          })}
        </ItemWrapper>
        <IconWrapper>
          <BsSearch className="icon search" />
          <RiShoppingCart2Line
            className={`icon ${cartOpen && "cart-open"}`}
            onClick={onCart}
          />
          <BtnWrap>
            <Button onClick={() => navigate("/login")} width="100px">
              <GiExitDoor style={{ marginRight: "8px" }} /> Login
            </Button>
          </BtnWrap>
        </IconWrapper>
      </Container>
      <NavbatInput />
      <Outlet />
      <Responsive scrollNav={scrollNav}>
        {secondNavItems.map((value) => {
          return (
            <NavLink key={value.id} style={isactive} to={value.path}>
              <Wrapper>
                {value.img}
                {value.title}
              </Wrapper>
            </NavLink>
          );
        })}
      </Responsive>
    </>
  );
};

export default Navbar;
