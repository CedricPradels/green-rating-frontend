// REACT
import React, { useState, useEffect } from "react";

// CSS
import "./Grades.css";

// AXIOS
import axios from "axios";

// COOKIES
import Cookies from "js-cookie";

// COMPONENTS
import FormLabel from "../components/FormLabel";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import FormGroup from "../components/FormGroup";
import Form from "../components/Form";
import TileGrade from "../components/TileGrade";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Grades = () => {
  const [grades, setGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserGrades = async () => {
      const token = Cookies.get("greenRatingToken");
      setIsLoading(true);

      const response = await axios.get(
        `${process.env.REACT_APP_GREEN_RATING_API}user/grades?year=2020`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response.data);
      setGrades(response.data.grades);
      setIsLoading(false);
    };

    getUserGrades();
  }, []);

  return (
    <main className="grades">
      <h2>Classes</h2>
      <h3>2020</h3>
      <ul>
        <TileClass to="/grades/add">
          <i>
            <FontAwesomeIcon icon="plus" />
          </i>
        </TileClass>
        {!isLoading &&
          grades.map((grade, index) => {
            return <TileGrade key={index} to="/" {...grade}></TileGrade>;
          })}
      </ul>
    </main>
  );
};

export default Grades;
