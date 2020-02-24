// REACT
import React, { useState, useEffect } from "react";

// AXIOS
import axios from "axios";

// COMPONENTS
import TileClass from "../components/TileClass";

const ClassesAdd = () => {
  // STATES
  const [classes, setClasses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getClasses = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_GREEN_RATING_API}class/read?year=2020`
      );

      const classes = response.data.classes;
      if (classes) {
        setClasses(classes);
      }
      setIsLoading(false);
    };
    getClasses();
  }, []);
  return (
    <main className="classesAdd">
      <section>
        <h2>2020</h2>
        <ul>
          {!isLoading &&
            classes.map((currentClass, index) => {
              console.log(currentClass);
              return (
                <TileClass
                  key={index}
                  onClick={async () => {
                    const response = await axios.get(
                      `${process.env.REACT_APP_GREEN_RATING_API}user/classes/add?id=${currentClass._id}`
                    );
                  }}
                  to="/classes"
                  {...currentClass}
                ></TileClass>
              );
            })}
        </ul>
      </section>
    </main>
  );
};

export default ClassesAdd;
