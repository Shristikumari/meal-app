import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Text = styled.p`
  margin: 20px;
  font-size: 18px;
  line-height: 1.5;
`;

function AboutMe() {
  return (
    <Container>
      <h1>About Me</h1>
      <Text>
        Welcome to my meal app! I am passionate about cooking and trying new
        recipes.
      </Text>
      <Text>
        This app helps you explore different meal categories, find your favorite
        meals, and even get a random meal suggestion.
      </Text>
      <Text>
        Feel free to navigate through the app and enjoy your culinary journey!
      </Text>
    </Container>
  );
}

export default AboutMe;
