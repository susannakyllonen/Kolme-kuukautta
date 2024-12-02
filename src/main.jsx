import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// main.jsx on sovelluksen sisäänkäyntitiedosto, jossa React kytketään
// HTML-dokumentin DOM-elementtiin (<div id="root">).
// Se lataa App.jsx:n ja tekee siitä React-sovelluksen juuren.
// Tässä käytetään React 18:n createRoot-metodia DOM:in kanssa
// ja kehityksen aikana StrictMode-tilaa, joka auttaa havaitsemaan mahdolliset ongelmat.
