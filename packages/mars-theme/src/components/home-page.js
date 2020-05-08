import React from "react";
import { styled, connect } from "frontity";
import Image from "./image.js"

// The home page component
const Homepage = ({ state }) => {
  const data = state.source.get(state.router.link);

  const title = "Home";
  const description = "This is the brochure-ware site home page";

  return (
    <Container>
    {/* This is a comment in JSX*/}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image image="mountains" />  {/* valid images: balloons, mountains, london */}
    </Container>
  );
};

export default connect(Homepage);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
  font-size: 2em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  margin: 24px 0;
`;
