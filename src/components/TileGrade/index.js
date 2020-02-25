// REACT
import React, { Children } from "react";
import { Link } from "react-router-dom";

// CSS
import "./TileGrade.css";

const TileGrade = ({ to, name, students, children }) => {
  return (
    <li className="titleGrade">
      <Link to={to} className="content">
        {!children ? (
          <div>
            <h2>{name}</h2>
            <h3>{`${students.length} élèves`}</h3>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </Link>
    </li>
  );
};

export default TileGrade;
