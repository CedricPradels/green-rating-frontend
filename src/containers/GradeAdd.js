// REACT
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// CSS
import "./GradeAdd.css";

// AXIOS
import axios from "axios";

// COMPONENTS
import TileGrade from "../components/TileGrade";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GradeAdd = () => {
  // STATES
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // PARAMS
  const { year } = useParams();

  useEffect(() => {
    const getGrades = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_GREEN_RATING_API}grade/read?year=2020`
      );

      const grades = response.data.grades;
      if (grades) {
        setGrades(grades);
      }
      setIsLoading(false);
    };
    getGrades();
  }, []);
  return (
    <main className="gradeAdd">
      <section>
        <h2>Ajouter une classe pour l'année 2020</h2>
        <ul>
          {!isLoading &&
            grades.map((grade, index) => {
              return (
                <TileGrade
                  key={index}
                  onClick={async () => {
                    const response = await axios.get(
                      `${process.env.REACT_APP_GREEN_RATING_API}user/grades/add?id=${grade._id}`
                    );
                  }}
                  to="/grades"
                  {...grade}
                ></TileGrade>
              );
            })}
        </ul>
      </section>
    </main>
  );
};

export default GradeAdd;
