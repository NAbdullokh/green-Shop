import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  gap: 20px;
  display: none;
  @media (max-width: 900px) {
    display: flex;
    padding: 0px 14px 0px 14px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  .search-icon {
    left: 20px;
    position: absolute;
  }
`;

InputWrapper.Input = styled.input`
  width: 100%;
  height: 45px;
  background: #f8f8f8;
  border-radius: 10px;
  border: none;
  outline: none;
  padding-left: 50px;
`;

export const Button = styled.div`
  min-width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    137.05deg,
    rgba(70, 163, 88, 0.45) -24.6%,
    #46a358 100%
  );
  box-shadow: 0px 10px 20px rgba(70, 163, 88, 0.3);
  border-radius: 14px;
`;
