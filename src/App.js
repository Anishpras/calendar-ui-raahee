import React from "react";
import "./_app.scss";
import logo from "./assets/Group 1.png";
import CardYellow from "./components/cards/CardYellow";
import CardPink from "./components/cards/CardPink";
const App = () => {
  return (
    <div className="main__app" >  
    <div className="app">
    <img className="logoImage" src={logo} alt="" />
    <div className="app_container">
    <CardYellow />
    <CardPink />
    </div>
    </div>
    </div>
  );
};

export default App;
