import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { BtnWrap, Container, IconWrapper, ItemWrapper } from "./style";
import logo from "../../assets/img/logo.png";
import { NavbarItems } from "../../utils/navbarItems";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";
import Button from "../../Generic/Button";
import Nav from "../Hamburger";
import { useState } from "react";
import NavbatInput from "./Input";

const Navbar = () => {
  const navigate = useNavigate();

  const [cartOpen, setCartOpen] = useState(false);

  const active = ({ isActive }) => {
    return {
      borderBottom: isActive ? "3px solid #46A358" : "none",
      fontWeight: isActive ? "700" : "400",
      paddingBottom: isActive ? "26px" : "0px",
      transition: "0.5s",
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
          {NavbarItems.map((value) => {
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
          <Nav />
        </IconWrapper>
      </Container>
      <NavbatInput />
      <Outlet />
    </>
  );
};

export default Navbar;
