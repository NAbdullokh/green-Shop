import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
`;

Container.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 20px;
  color: var(--grayColor);
  text-align: center;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  @media (max-width: 532px) {
    justify-content: center;
  }
`;
