import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavoritesContextProvaider } from "./store/favoriites-context";

ReactDOM.render(
  <FavoritesContextProvaider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvaider>,
  document.getElementById("root")
);
