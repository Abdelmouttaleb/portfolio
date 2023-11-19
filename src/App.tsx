import React from "react";
import { Row, Col } from "antd";
import RegistrationForm from "./components/RegistrationForm.tsx";
import LoginForm from "./components/LoginForm.tsx";
import Home from "./components/Home.tsx";

function App() {
  return (
    <>
      <h2>Registration</h2>
      <RegistrationForm />
      <h2>Login</h2>
      <LoginForm />
      <h2>Main</h2>
      <Home />
    </>
  );
}

export default App;
