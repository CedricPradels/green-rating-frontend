// REACT
import React from "react";

// CSS
import "./Header.css";

// IMAGES
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>
        <span className="green">Green</span>
        <span className="rating">Rating</span>
      </h1>
    </header>
  );
};

export default Header;
