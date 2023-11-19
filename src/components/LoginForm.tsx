import React from "react";
import { Form, Input, Button } from "antd";

function LoginForm() {
  const onFinish = (values: any) => {
    console.log("Login form values:", values);
  };

  return (
    <Form onFinish={onFinish}>
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
