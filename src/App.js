import React from "react";
import "./_app.scss";
import logo from "./assets/logoRaahee.png";
import blob5 from "./assets/Ellipse 5.png";
import blob4 from "./assets/Ellipse 4.png";
import blob6 from "./assets/Ellipse 6.png";
import blob7 from "./assets/Ellipse 7.png";
import blob8 from "./assets/Ellipse 8.png";

import CardYellow from "./components/cards/CardYellow";
import CardPink from "./components/cards/CardPink";
const App = () => {
  return (
    <div className="main__app">
      <div className="app">
        <img className="logoImage" src={logo} alt="" />
        <img className="blob5" src={blob5} alt="" />
        <img className="blob4" src={blob4} alt="" />
        <img className="blob6" src={blob6} alt="" />
        <img className="blob8" src={blob8} alt="" />
        <div className="app_container">
          <CardYellow />
          <CardPink />
        </div>
        <img className="blob7" src={blob7} alt="" />
      </div>
    </div>
  );
};

export default App;
