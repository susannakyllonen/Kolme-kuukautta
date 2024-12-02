import Calculator from "./components/Calculator";

function App() {
  return <Calculator />;
}

export default App;

// App.jsx on React-sovelluksen pääkomponentti, joka toimii sovelluksen rakenteen juurena.
// Siihen voi sisällyttää muita komponentteja (kuten tässä Calculator) ja määritellä,
// miten sovellus kootaan visuaalisesti.
// App.jsx on tyypillisesti se komponentti, jonka koko sovellus lataa ensin
// ja muut komponentit rakentavat sen sisältöä.

// App.js palauttaa JSX-muotoisen rakenteen, jossa Calculator on lapsikomponentti.
// Tämä tiedosto huolehtii sovelluksen pääasettelusta ja ohjaa, mitä näytetään missäkin.
