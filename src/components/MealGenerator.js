import React, { useState } from "react";
import styled from "styled-components";
import { useFavorites } from "../context/FavoritesContext";

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const MealItem = styled.div`
  margin: 20px;
`;

const MealImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

function MealGenerator() {
  const [meal, setMeal] = useState(null);
  const { addFavorite } = useFavorites();

  const fetchRandomMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]));
  };

  return (
    <Container>
      <h1>Random Meal Generator</h1>
      <Button onClick={fetchRandomMeal}>Generate</Button>
      {meal && (
        <MealItem>
          <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
          <h2>{meal.strMeal}</h2>
          <Button onClick={() => addFavorite(meal)}>Add to Favorites</Button>
        </MealItem>
      )}
    </Container>
  );
}

export default MealGenerator;
