import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { LogedinContext } from "../App.tsx";

const refresh = () => {
  window.location.reload();
};

const Header = () => {
  const navigate = useNavigate();
  const isLogedIn = useContext(LogedinContext);

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    navigate("/login");
    refresh();
  };

  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/layout">Layout</Link>
      </Menu.Item>
      {isLogedIn && (
        <Menu.Item key="5" onClick={handleLogout}>
          Logout
        </Menu.Item>
      )}
      {!isLogedIn && (
        <>
          <Menu.Item key="3">
            <Link to="/registration">Registration</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default Header;
