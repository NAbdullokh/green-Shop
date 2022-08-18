import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: 45px;
  @media (max-width: 900px) {
    margin: 0;
  }
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
  grid-gap: 1rem;
  align-items: start;
`;
