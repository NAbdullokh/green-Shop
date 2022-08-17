import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 78px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: none;
  }
`;

Container.Logo = styled.img``;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  @media (max-width: 900px) {
    display: none;
  }
`;

ItemWrapper.Items = styled.div``;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .icon {
    transform: scale(1.2);
    color: black;
  }
  .cart-open {
    color: red;
  }
`;

export const BtnWrap = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Responsive = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0px -10px 30px rgba(184, 184, 184, 0.2);
  display: none;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 999;
  border-top: 1px solid gray;
  padding: 10px 14px 10px 14px;
  /* display: ${({ scrollNav }) => (scrollNav ? "block" : "none")}; */
  @media (max-width: 900px) {
    display: flex;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;
