import React from "react";

// CSS
import "./FormInput.css";

const FormInput = ({ state, setState, id, placeholder, type }) => {
  return (
    <input
      className="formInput"
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
