import React from "react";
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

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <Container>
      <h1>My Favorites</h1>
      {favorites.length > 0 ? (
        favorites.map((meal) => (
          <MealItem key={meal.idMeal}>
            <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            <Button onClick={() => removeFavorite(meal.idMeal)}>
              Remove from Favorites
            </Button>
          </MealItem>
        ))
      ) : (
        <p>No favorite meals yet.</p>
      )}
    </Container>
  );
}

export default Favorites;
