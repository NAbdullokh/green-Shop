import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 140px;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 55px;
  }
`;

export const Boxes = styled.div`
  width: 100%;
  background: #fbfbfb;
  display: flex;
  justify-content: space-between;
  padding: 5px 30px 5px 0;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

Boxes.Img = styled.img`
  width: 292px;
  margin-top: -50px;
  @media (max-width: 640px) {
    width: 220px;
    height: 220px;
    margin-bottom: 10px;
  }
  @media (max-width: 450px) {
    width: 150px;
    height: 150px;
  }
`;

export const TextElements = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 640px) {
    align-items: center;
  }
`;

TextElements.Title = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 24px;
  text-align: right;
  text-transform: uppercase;
  color: #3d3d3d;
  width: 80%;
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 640px) {
    text-align: center;
  }
`;

TextElements.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: #727272;
  width: 90%;
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 640px) {
    text-align: center;
  }
`;
