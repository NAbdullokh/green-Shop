import React from "react";
import flower from "../../assets/img/sidebarFlower.png";
import sale from "../../assets/img/sale.png";
import { sidebarItem } from "../../mock/sidebar";
import { Container, Sale, TitlesWrap, Wrapper } from "./style";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from "../../Generic/Button";

function valuetext(value) {
  return `${value}°C`;
}

const Filter = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Container>
        <Container.Title>Categories</Container.Title>
        <TitlesWrap>
          {sidebarItem.map((value) => {
            return (
              <Wrapper key={value.id}>
                <Container.Titles>{value.title}</Container.Titles>
                <Container.Num>(22)</Container.Num>
              </Wrapper>
            );
          })}
        </TitlesWrap>
        <Container.Title>Price Range</Container.Title>
        <TitlesWrap>
          <Box sx={{ width: 280 }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              style={{
                color: "var(--greenColor)",
                marginTop: "20px",
              }}
            />
          </Box>
          <Container.Price>
            Price:
            <span>
              $ {value[0]} - ${value[1]}
            </span>
          </Container.Price>
          <Button width="90px" height="35px" mb="46">
            Filter
          </Button>
        </TitlesWrap>
        <Container.Title>Size</Container.Title>
        <TitlesWrap>
          <Wrapper>
            <Container.Titles>Small</Container.Titles>
            <Container.Num>(119)</Container.Num>
          </Wrapper>

          <Wrapper>
            <Container.Titles>Medium</Container.Titles>
            <Container.Num>(119)</Container.Num>
          </Wrapper>

          <Wrapper>
            <Container.Titles>Large</Container.Titles>
            <Container.Num>(119)</Container.Num>
          </Wrapper>
        </TitlesWrap>
      </Container>
      <Sale>
        <Sale.Img src={sale} alt="" />
        <Sale.Price>UP TO 75% OFF</Sale.Price>
        <Sale.Img src={flower} alt="" />
      </Sale>
    </div>
  );
};

export default Filter;
