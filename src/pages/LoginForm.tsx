import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Message from "../helpers/message.tsx";

function LoginForm() {
  const [showMessage, setShowMessage] = useState(false);
  const refresh = () => {
    window.location.reload();
  };
  const onFinish = (values: any) => {
    const loginData = [values];
    localStorage.setItem("loginData", JSON.stringify(loginData));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
    refresh();
  };
  return (
    <Form onFinish={onFinish}>
      {showMessage && <Message />}
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "Please enter a valid email!",
          },
          {
            required: true,
            message: "Please enter your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please enter your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
