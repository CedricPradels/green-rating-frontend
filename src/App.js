// REACT
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./App.css";

// CONTAINERS
import Signin from "./containers/Signin";
import Grades from "./containers/Grades";
import Signup from "./containers/Signup";
import GradeAdd from "./containers/GradeAdd";

// COMPONENTS
import Header from "./components/Header";

// FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faLeaf } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faLeaf);

const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/grades/add">
            <GradeAdd />
          </Route>
          <Route path="/grades">
            <Grades />
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
