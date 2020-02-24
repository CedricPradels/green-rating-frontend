// REACT
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./Header.css";

// IMAGES
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header>
      <Link className="redirectHeader" to="/">
        <img src={logo} alt="logo" />
        <h1>
          <span className="green">Green</span>
          <span className="rating">Rating</span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
