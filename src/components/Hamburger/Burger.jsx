import React, { useState } from "react";

import RightNav from "./RightNav";
import { Button, StyledBurger } from "./style";
import filter from "../../assets/icon/filter.svg";

export const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} fn={setOpen} onClick={() => setOpen(!open)}>
        <Button>
          <img src={filter} alt="" />
        </Button>
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
