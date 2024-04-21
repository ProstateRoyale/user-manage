import { Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import UserManagement from "./components/UserManagement";

const RouterComponent = () => {
  return (
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/users" element={<UserManagement />} />
      </Routes>
  );
};

export default RouterComponent;