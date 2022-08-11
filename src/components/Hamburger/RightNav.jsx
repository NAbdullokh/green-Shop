import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarItems } from "../../utils/navbarItems";

import { Title, Ul } from "./style";
export const RightNav = ({ open }) => {
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
    </Ul>
  );
};
export default RightNav;
