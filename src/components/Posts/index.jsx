import React from "react";
import { postItems } from "../../mock/posts";
import { Card, CardWrapper, Container, TitleSection } from "./style";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Container.Title>Our Blog Posts</Container.Title>
      <Container.Description>
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </Container.Description>
      <CardWrapper>
        {postItems.map((value) => {
          return (
            <Card key={value.id}>
              <Card.Img src={value.img} />
              <TitleSection>
                <TitleSection.Date>{value.date}</TitleSection.Date>
                <TitleSection.Title>{value.title}</TitleSection.Title>
                <TitleSection.Description>
                  {value.description}
                </TitleSection.Description>
                <TitleSection.Read onClick={() => navigate("/blogs")}>
                  Read More <BsChevronRight style={{ marginLeft: "10px" }} />
                </TitleSection.Read>
              </TitleSection>
            </Card>
          );
        })}
      </CardWrapper>
    </Container>
  );
};

export default Post;
