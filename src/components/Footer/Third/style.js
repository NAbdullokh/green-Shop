import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 33px 0px 13px 23px;
  background: #fbfbfb;
  border-bottom: 2px solid rgba(70, 163, 88, 0.2);
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 0px 20px 0px;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

Wrapper.Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
`;

Wrapper.Item = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--grayColor);
  cursor: pointer;
`;

export const SocialMedia = styled.div`
  flex: 1.5;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MediaWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 33px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  :hover {
    border: 1px solid rgba(70, 163, 88, 0.2);
    border-radius: 4px;
  }
`;

IconWrapper.Icons = styled.img``;
