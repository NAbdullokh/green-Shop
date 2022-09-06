import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Title, Ul } from "./style";
import { sidebarItem } from "../../mock/sidebar";
export const RightNav = ({ open }) => {
  const navigate = useNavigate();

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <Ul open={open}>
      {sidebarItem.map((value) => {
        return (
          // <NavLink
          //   onClick={() => open.fn(false)}
          //   key={value.id}
          //   to={value.path}
          // >
          <Title onClick={() => open.fn(false)} key={value.id} to={value.path}>
            {value.title}
          </Title>
          // </NavLink>
        );
      })}
    </Ul>
  );
};
export default RightNav;
