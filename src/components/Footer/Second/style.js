import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: rgba(70, 163, 88, 0.1);
  display: flex;
  padding: 25px 0 19px 23px;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 20px;
  }
`;

export const Elements = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    justify-content: center;
  }
  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

Elements.Svg = styled.img``;

Elements.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--grayColor);
  width: 70%;
  margin-left: 10px;
  @media (max-width: 1200px) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 440px) {
    margin: 0;
  }
`;

export const Calling = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`;
