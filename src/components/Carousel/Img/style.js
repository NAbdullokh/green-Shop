import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  margin-top: 12px;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
  border-radius: 20px;
  padding-bottom: 17px;
  @media (max-width: 900px) {
    height: 300px;
    background-color: #cce6d1;
  }
  /* @media (max-width: 500px) {
    height: 240px;
  } */
`;

export const Box1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 25px;
  @media (max-width: 900px) {
    flex: 3;
  }
  @media (max-width: 770px) {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

Box1.Subtitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--grayColor);
  margin-bottom: 7px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

Box1.Title = styled.div`
  font-style: normal;
  font-weight: bolder;
  font-size: 70px;
  line-height: 70px;
  text-transform: uppercase;
  color: var(--grayColor);
  margin-bottom: 5px;
  span {
    color: var(--greenColor);
  }
  @media (max-width: 1300px) {
    font-size: 50px;
  }
  @media (max-width: 1210px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media (max-width: 865px) {
    font-size: 24px;
    line-height: 40px;
  }
`;

Box1.Description = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--lightGray);
  width: 90%;
  margin-bottom: 44px;
  @media (max-width: 1120px) {
    display: none;
  }
`;

Box1.Description2 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--lightGray);
  margin-bottom: 44px;
  display: none;
  @media (max-width: 1120px) {
    display: block;
  }
  @media (max-width: 785px) {
    margin-bottom: 8px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;

export const Box2 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 900px) {
    flex: 0.5;
  }
  @media (max-width: 770px) {
    width: 160px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

Box2.Img = styled.img`
  @media (max-width: 1100px) {
    transform: scale(0.7);
  }
  @media (max-width: 900px) {
    width: 350px;
  }
  @media (max-width: 500px) {
    width: 280px;
  }
`;

Box2.Img2 = styled.img`
  position: absolute;
  top: 70%;
  left: 20%;
  @media (max-width: 1100px) {
    top: 57%;
  }
  @media (max-width: 900px) {
    top: 51%;
    left: 16%;
    width: 110px;
  }
  @media (max-width: 500px) {
    width: 80px;
    top: 54%;
    left: 5%;
  }
`;

export const BtnWrapper = styled.div`
  display: block;
  @media (max-width: 500px) {
    display: none;
  }
`;

Box1.SecondBtn = styled.div`
  margin-top: 11px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: var(--greenColor);
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`;
