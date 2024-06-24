import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Meals() {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, [category]);

  return (
    <div>
      <h1>Meals in {category}</h1>
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h2>{meal.strMeal}</h2>
        </div>
      ))}
    </div>
  );
}

export default Meals;
