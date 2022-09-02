import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

export const EachIcon = styled.div`
  width: 35px;
  height: 35px;
  background: #ffffff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  display: none;
`;

export const Container = styled.div`
  width: 308px;
  /* max-width: 258px; */
  padding: 31px 0px 0px 4px;
  padding-left: 4px;
  display: flex;
  margin: auto;
  background-color: #fbfbfb;
  flex-direction: column;
  :hover {
    border-top: 1px solid var(--greenColor);
    transition: 0.3s;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    padding: 31px 14px 0px 14px;
  }
  @media (max-width: 548px) {
    margin: auto;
  }
  &:hover ${EachIcon} {
    display: flex;
  }
`;

Container.Img = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
Body.Title = styled.p`
  padding-top: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: var(--grayColor);
`;

Body.Price = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: var(--greenColor);
`;

export const IconWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -30px;
`;

IconWrap.Cart = styled(RiShoppingCart2Line)`
  transform: scale(1.3);
`;

IconWrap.Like = styled(AiOutlineHeart)`
  transform: scale(1.3);
`;

IconWrap.Search = styled(BsSearch)`
  transform: scale(1.3);
`;
