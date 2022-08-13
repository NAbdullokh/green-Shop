import React from "react";
import Button from "../../Generic/Button";
import { advItems } from "../../mock/advItems";
import { Boxes, Container, TextElements } from "./style";
import { BsChevronRight } from "react-icons/bs";

const Adv = () => {
  return (
    <Container>
      {advItems.map((value) => {
        return (
          <Boxes key={value.id}>
            <Boxes.Img src={value.img} />
            <TextElements>
              <TextElements.Title>{value.title}</TextElements.Title>
              <TextElements.Description>
                {value.description}
              </TextElements.Description>
              <Button width="140px" height="40px">
                Find More
                <BsChevronRight style={{ marginLeft: "10px" }} />
              </Button>
            </TextElements>
          </Boxes>
        );
      })}
    </Container>
  );
};

export default Adv;
