// REACT
import React, { useState, useEffect } from "react";

// CSS
import "./Classes.css";

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
import TileClass from "../components/TileClass";

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUserClasses = async () => {
      const token = Cookies.get("greenRatingToken");
      setIsLoading(true);

      const response = await axios.get(
        `${process.env.REACT_APP_GREEN_RATING_API}user/classes?year=2020`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response.data);
      setClasses(response.data.classes);
      setIsLoading(false);
    };

    getUserClasses();
  }, []);

  return (
    <main className="classes">
      <h2>Classes</h2>
      <h3>2020</h3>
      <ul>
        <TileClass to="/classes/add">
          <i>
            <FontAwesomeIcon icon="plus" />
          </i>
        </TileClass>
        {!isLoading &&
          classes.map((currentClass, index) => {
            return <TileClass key={index} to="/" {...currentClass}></TileClass>;
          })}
      </ul>
    </main>
  );
};

export default Classes;
