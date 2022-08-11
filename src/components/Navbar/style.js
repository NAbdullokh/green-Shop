import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 78px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Container.Logo = styled.img``;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  .link {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #3d3d3d;
  }
`;

ItemWrapper.Items = styled.div``;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .icon {
    transform: scale(1.2);
  }
`;
