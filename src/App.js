import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import Favorites from "./components/Favorites";
import MealGenerator from "./components/MealGenerator";
import AboutMe from "./components/AboutMe";
import Meals from "./components/Meals";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/meal-generator" element={<MealGenerator />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/meals/:category" element={<Meals />} />
      </Routes>
    </Router>
  );
}

export default App;
