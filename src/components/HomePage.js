import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Button = styled(Link)`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  background-color: #333;
  border-radius: 5px;
  &:hover {
    background-color: #555;
  }
`;
console.log("hello");
function HomePage() {
  return (
    <Container>
      <h1>Home Page</h1>
      <Button to="/menu">Menu</Button>
      <Button to="/favorites">Favorites</Button>
      <Button to="/meal-generator">Random Meal</Button>
    </Container>
  );
}

export default HomePage;
