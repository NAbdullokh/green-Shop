import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 138px;
`;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 16px;
  text-align: center;
  color: var(--grayColor);
`;

Container.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: var(--lightGray);
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 35px;
  gap: 128px;
`;

export const Card = styled.div`
  width: 268px;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  /* margin: 48.5px; */
  @media (max-width: 728px) {
    width: 100%;
  }
`;
Card.Img = styled.img``;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 11px 13px 15px;
`;

TitleSection.Date = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--greenColor);
`;

TitleSection.Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: var(--grayColor);
`;

TitleSection.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--lightGray);
`;

TitleSection.Read = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--grayColor);
  cursor: pointer;
  display: flex;
  align-items: center;
`;
