// REACT
import React, { useState, useEffect } from "react";

// CSS
import "./Grades.css";

// AXIOS
import axios from "axios";

// COOKIES
import Cookies from "js-cookie";

// COMPONENTS
import TileGrade from "../components/TileGrade";
import Modale from "../components/Modale";
import Form from "../components/Form";
import FormGroup from "../components/FormGroup";
import FormInput from "../components/FormInput";
import FormLabel from "../components/FormLabel";
import FormButton from "../components/FormButton";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Grades = () => {
  const [userGrades, setUserGrades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModaleVisible, setIsModaleVisible] = useState(false);
  const [gradeName, setGradeName] = useState("");
  const [gradesOfYear, setGlobalGradesOfYear] = useState(null);
  const [token, setToken] = useState(null);

  const getGlobalGradesOfYear = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GREEN_RATING_API}grade/read?year=2020`
    );
    const grades = response.data.grades;

    setGlobalGradesOfYear(grades);

    setIsModaleVisible(true);
  };

  const getUserGrades = async () => {
    console.log("UseEffect");
    const token = Cookies.get("greenRatingToken");
    setToken(token);
    setIsLoading(true);

    const response = await axios.get(
      `${process.env.REACT_APP_GREEN_RATING_API}user/grades?year=2020`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    setUserGrades(response.data.grades);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserGrades();
  }, [gradesOfYear]);

  return (
    <main className="grades">
      <h2>Classes</h2>
      <div className="addClassWrapper">
        <h3>2020</h3>
        <i onClick={getGlobalGradesOfYear}>
          <FontAwesomeIcon icon="plus" />
        </i>
      </div>
      <ul>
        {!isLoading &&
          userGrades.map((grade, index) => {
            return <TileGrade key={index} to="/" {...grade}></TileGrade>;
          })}
      </ul>
      {isModaleVisible && (
        <Modale>
          <div>
            <Form
              title={"Ajouter une classe à l'année 2020"}
              callback={async event => {
                event.preventDefault();
                const response = await axios.post(
                  `${process.env.REACT_APP_GREEN_RATING_API}grade/create`,
                  { name: gradeName, year: "2020" },
                  { headers: { Authorization: `Bearer ${token}` } }
                );
                console.log("Début lecture de getGloabalGradesOfYear");
                getGlobalGradesOfYear();
                console.log("Fin lecture de getGloabalGradesOfYear");
              }}
            >
              <FormGroup>
                <FormLabel text="Nom de la classe" id="gradeName"></FormLabel>
                <FormInput
                  state={gradeName}
                  setState={setGradeName}
                  id="gradeName"
                  placeholder="10ème classe"
                  type="text"
                ></FormInput>
              </FormGroup>
              <FormButton type="submit" text="Ajouter"></FormButton>
              <ul className="gradeWrapper">
                {gradesOfYear.map((grade, index) => {
                  return (
                    <TileGrade
                      key={index}
                      callback={async () => {
                        const response = await axios.get(
                          `${process.env.REACT_APP_GREEN_RATING_API}user/grades/add?id=${grade._id}`,
                          { headers: { Authorization: `Bearer ${token}` } }
                        );
                        getUserGrades();
                        setIsModaleVisible(false);
                      }}
                      {...grade}
                    ></TileGrade>
                  );
                })}
              </ul>
            </Form>
          </div>
        </Modale>
      )}
    </main>
  );
};

export default Grades;
