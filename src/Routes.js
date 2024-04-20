import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import UserManagement from "./components/UserManagement";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/users" component={UserManagement} />
      </Switch>
    </Router>
  );
};

export default Routes;