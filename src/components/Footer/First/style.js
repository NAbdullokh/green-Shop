import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  background: #fbfbfb;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const Boxes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 60px 0px 23px;
  border-right: 1px solid rgba(70, 163, 88, 0.1);
  @media (max-width: 1200px) {
    border: none;
    border-bottom: 1px solid rgba(70, 163, 88, 0.1);
    align-items: center;
  }
`;

Boxes.Img = styled.img``;

Boxes.Title = styled.p`
  margin-top: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: var(--grayColor);
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

Boxes.Description = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--lightColor);
  @media (max-width: 1200px) {
    text-align: center;
  }
`;

export const InputBox = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0px 60px 0px 23px;
  @media (max-width: 1200px) {
    align-items: center;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 17px;
`;

InputWrapper.Input = styled.input`
  border: none;
  outline: none;
  width: 90%;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #acacac;
  padding-left: 11px;
  padding-right: 35px;
`;
