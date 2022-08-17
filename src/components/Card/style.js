import styled from "styled-components";

export const Container = styled.div`
  flex: 1 1 21rem;
  max-width: 258px;
  padding: 31px 4px 19px 4px;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    padding: 31px 14px 0px 14px;
  }
`;

Container.Img = styled.img`
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
Body.Title = styled.p`
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
