import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import UserManagement from "./components/UserManagement";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <div className="App">
      <Router>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" render={(props) => <LoginForm {...props} onLogin={handleLogin} />} />
        <Route path="/users" render={(props) => token ? <UserManagement {...props} /> : <LoginForm {...props} />} />
      </Router>
    </div>
  );
};

export default App;