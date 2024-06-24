import React, { useState, useEffect } from "react";
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

function Menu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <Container>
      <h1>Menu</h1>
      {categories.map((category) => (
        <Button key={category.idCategory} to={`/meals/${category.strCategory}`}>
          {category.strCategory}
        </Button>
      ))}
    </Container>
  );
}

export default Menu;
