import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { login } from "../api/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      {error && <p className="text-danger">{error}</p>}

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;