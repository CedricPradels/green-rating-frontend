// REACT
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CONTAINERS
import Signin from "./containers/Signin";
import Classes from "./containers/Classes";
import Signup from "./containers/Signup";

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
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Signin />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
