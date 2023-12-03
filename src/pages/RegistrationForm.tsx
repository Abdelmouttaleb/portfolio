import React from "react";
import { Form, Input, Button } from "antd";

function RegistrationForm() {
  const onFinish = (values: any) => {
    const registrationData = JSON.parse(
      localStorage.getItem("registrationData") || "[]"
    );
    registrationData.push(values);
    localStorage.setItem("registrationData", JSON.stringify(registrationData));
    console.log("Registration succesfully");
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[
          {
            required: true,
            message: "Please enter your first name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[
          {
            required: true,
            message: "Please enter your last name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
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
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegistrationForm;
