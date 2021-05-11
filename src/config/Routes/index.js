import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import About from "../../pages/About";
import AddUser from "../../pages/AddUser";
import Dashboard from "../../pages/Dashboard";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/AddUser">
          <AddUser />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
