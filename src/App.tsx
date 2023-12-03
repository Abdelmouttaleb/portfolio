import React, { createContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm.tsx";
import LoginForm from "./pages/LoginForm.tsx";
import Home from "./pages/Home.tsx";
import Layout from "./pages/Layout.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { getIsUserLogedin } from "./helpers/getUserInfo.ts";

const Logedin = getIsUserLogedin();
export const LogedinContext = createContext(false);

function App() {
  return (
    <LogedinContext.Provider value={Logedin}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/layout"
          element={Logedin ? <Layout /> : <Navigate to="/login" />}
        />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <Footer />
    </LogedinContext.Provider>
  );
}

export default App;
