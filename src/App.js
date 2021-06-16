import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.js";
import "./_app.scss";
import logo from "./assets/logoRaahee.png";
import blob5 from "./assets/Ellipse 5.png";
import blob4 from "./assets/Ellipse 4.png";
import blob6 from "./assets/Ellipse 6.png";
import blob7 from "./assets/Ellipse 7.png";
import blob8 from "./assets/Ellipse 8.png";
import Admin from "./pages/Admin";
import Register from "./pages/authentication/Register.js";
import Login from "./pages/authentication/Login.js";
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
          <BrowserRouter>
            <AuthProvider>
              <Route path="/" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/admin" exact component={Admin} />
            </AuthProvider>
          </BrowserRouter>
        </div>
        <img className="blob7" src={blob7} alt="" />
      </div>
    </div>
  );
};

export default App;
