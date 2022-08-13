import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavbarItems } from "../../utils/navbarItems";
import { GiExitDoor } from "react-icons/gi";

import { Title, Ul } from "./style";
import Button from "../../Generic/Button";
export const RightNav = ({ open }) => {
  const navigate = useNavigate();
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <Ul open={open}>
      {NavbarItems.map((value) => {
        return (
          !value.hidden && (
            <NavLink
              onClick={() => open.fn(false)}
              key={value.id}
              to={value.path}
            >
              <Title>{value.title}</Title>
            </NavLink>
          )
        );
      })}
      <Button mr="50" onClick={() => navigate("/login")} width="100px">
        <GiExitDoor style={{ marginRight: "8px" }} /> Login
      </Button>
    </Ul>
  );
};
export default RightNav;
