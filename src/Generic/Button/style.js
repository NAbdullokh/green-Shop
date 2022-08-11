import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "primary":
      return {
        color: "#46A358",
        border: " 1px solid #46A358",
      };
    default:
      return {
        background: " #46A358",
        color: "#ffffff",
      };
  }
};

const Container = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "35px"};
  min-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 6px;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  cursor: pointer;
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
`;

export { Container };
