import React from "react";

// CSS
import "./FormInput.css";

const FormInput = ({ state, setState, id, placeholder, type }) => {
  return (
    <input
      type={type}
      id={id}
      onChange={event => {
        setState(event.target.value);
      }}
      placeholder={placeholder}
      value={state}
    ></input>
  );
};

export default FormInput;
