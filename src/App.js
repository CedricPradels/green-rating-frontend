// REACT
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// AXIOS
import axios from "axios";

// COMPONENTS
import Header from "./components/Header";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    const getAPI = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BLUE_RATING_API}/test`
      );
      setValue(response.data.message);
      setIsLoading(false);
    };
    getAPI();
  }, []);

  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/">{!isLoading && value}</Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
