// REACT
import React from "react";

// CSS
import "./FormButton.css";

const FormButton = ({ type, text }) => {
  return (
    <button className="formButton" type={type}>
      {text}
    </button>
  );
};

export default FormButton;
