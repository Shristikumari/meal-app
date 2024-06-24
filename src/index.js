import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FavoritesProvider } from "./context/FavoritesContext";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <FavoritesProvider>
    <GlobalStyle />
    <App />
  </FavoritesProvider>,
  document.getElementById("root")
);
