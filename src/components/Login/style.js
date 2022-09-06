import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  margin: 100px 0 100px 0;
  width: 500px;
  height: 100%;
  padding: 50px 0 58px 0;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px whitesmoke;
  @media (max-width: 600px) {
    /* width: 90%; */
    box-shadow: none;
  }
`;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  color: #46a358;
`;

Container.Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #3d3d3d;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  padding: 0 15px 0 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 15px;
  color: #a5a5a5;
  :focus {
    border: 1px solid #46a358;
  }
  @media (max-width: 580px) {
    width: 100%;
  }
`;

Container.Forgot = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #46a358;
  text-align: left;
`;

export const Icon = styled.img`
  margin-right: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  @media (max-width: 580px) {
    width: 90%;
  }
`;
