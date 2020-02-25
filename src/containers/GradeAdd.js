// REACT
import React, { useState, useEffect } from "react";

// AXIOS
import axios from "axios";

// COMPONENTS
import TileGrade from "../components/TileGrade";

const GradeAdd = () => {
  // STATES
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGrades = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_GREEN_RATING_API}class/read?year=2020`
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
        <h2>2020</h2>
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
