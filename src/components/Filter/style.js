import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 380px;
  height: 100%;
  padding: 14px 24px 0px 18px;
  background: #fbfbfb;
  @media (max-width: 900px) {
    display: none;
  }
`;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: var(--grayColor);
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Container.Titles = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 40px;
  color: var(--lightGray);
`;

Container.Num = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 40px;
  text-align: right;
  color: var(--grayColor);
`;

export const TitlesWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 15px;
  margin-bottom: 10px;
`;

Container.Price = styled.p`
  margin: 16px 0px 16px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: var(--lightGray);
  span {
    color: var(--greenColor);
  }
`;

export const Sale = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(70, 163, 88, 0.1) 0%,
    rgba(70, 163, 88, 0.03) 100%
  );
  @media (max-width: 900px) {
    display: none;
  }
`;

Sale.Price = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 16px;
  color: #3d3d3d;
`;

Sale.Img = styled.img`
  width: 100%;
`;
