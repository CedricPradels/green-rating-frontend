// REACT
import React from "react";

// CSS
import "./Modale.css";

const Modale = ({ children, setState }) => {
  return (
    <div
      className="modale"
      onClick={event => {
        setState(false);
      }}
    >
      <div
        onClick={event => {
          event.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modale;
