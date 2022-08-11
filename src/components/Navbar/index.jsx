import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Container, IconWrapper, ItemWrapper } from "./style";
import logo from "../../assets/img/logo.png";
import { NavbarItems } from "../../utils/navbarItems";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiExitDoor } from "react-icons/gi";
import Button from "../../Generic/Button";

const Navbar = () => {
  const navigate = useNavigate();

  const active = ({ isActive }) => {
    return {
      borderBottom: isActive ? "3px solid #46A358" : "none",
      fontWeight: isActive ? "700" : "400",
      paddingBottom: isActive ? "26px" : "0px",
      transition: "0.5s",
    };
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
          <BsSearch className="icon" />
          <RiShoppingCart2Line className="icon" />
          <Button width="100px">
            <GiExitDoor style={{ marginRight: "8px" }} /> Login
          </Button>
        </IconWrapper>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
