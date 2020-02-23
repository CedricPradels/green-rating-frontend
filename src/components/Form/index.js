// REACT
import React from "react";

// CSS
import "./Form.css";

const Form = ({ callback, children, title }) => {
  console.log(callback);
  return (
    <form className="form" onSubmit={callback}>
      <h2>{title}</h2>
      {children}
    </form>
  );
};

export default Form;
