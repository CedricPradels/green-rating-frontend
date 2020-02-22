// REACT
import React from "react";

// CSS
import "./FormLabel.css";

const FormLabel = ({ text, id }) => {
  return <label htmlFor={id}>{text}</label>;
};

export default FormLabel;
