// REACT
import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./TileGrade.css";

const TileGrade = ({ callback, name, students, children }) => {
  return (
    <li className="titleGrade">
      <div onClick={callback} className="content">
        {!children ? (
          <div>
            <h2>{name}</h2>
            <h3>{`${students.length} élèves`}</h3>
            <button
              onClick={event => {
                event.stopPropagation();
              }}
            >
              Ajouter élève
            </button>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </li>
  );
};

export default TileGrade;
