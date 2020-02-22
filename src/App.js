// REACT
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// AXIOS
import axios from "axios";

// CONTAINERS
import Login from "./containers/Login";
import Classes from "./containers/Classes";

// COMPONENTS
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/classes">
            <Classes />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
