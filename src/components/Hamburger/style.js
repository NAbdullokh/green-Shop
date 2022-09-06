import styled from "styled-components";

// RightNav
export const Ul = styled.ul`
  padding-left: 120px;
  @media (max-width: 900px) {
    padding-left: 24px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
  li {
    list-style-type: none;
  }
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    z-index: 999;
    top: 4.9rem;
    left: 0;
    height: 100%;
    width: 100%;
    padding-top: 2rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 10px 28px;
      justify-content: space-around;
      align-items: center;
      text-align: start;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #191919;
    }
  }
`;

export const Navbar = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`;
export const Wrap = styled.div`
  @media (max-width: 900px) {
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
  }
`;

export const Title = styled.p`
  color: black;
  margin-bottom: 40px;
  margin-right: 50px;
  font-size: 20px;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover,
  :active {
    background: linear-gradient(
      137.05deg,
      rgba(70, 163, 88, 0.45) -24.6%,
      #46a358 100%
    );
    box-shadow: 0px 10px 20px rgba(70, 163, 88, 0.3);
    border-radius: 14px;
    color: white;
  }
`;

// Burger
export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
`;

export const Button = styled.div`
  margin-top: 10px;
  min-width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 10px 0;
  background: linear-gradient(
    137.05deg,
    rgba(70, 163, 88, 0.45) -24.6%,
    #46a358 100%
  );
  box-shadow: 0px 10px 20px rgba(70, 163, 88, 0.3);
  border-radius: 14px;
`;
