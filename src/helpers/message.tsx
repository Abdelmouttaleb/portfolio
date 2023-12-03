import React from "react";

function Message() {
  const registrationData = JSON.parse(
    localStorage.getItem("registrationData") || "[]"
  );
  const loginData = JSON.parse(localStorage.getItem("loginData") || "[]");
  const success = registrationData.some((regData: any) =>
    loginData.some(
      (login: any) =>
        login.email === regData.email && login.password === regData.password
    )
  );
  const wrongPassword = registrationData.some((regData: any) =>
    loginData.some(
      (login: any) =>
        login.email === regData.email && login.password !== regData.password
    )
  );
  const matchedRegistrationData = registrationData.find((regData: any) =>
    loginData.some(
      (login: any) =>
        login.email === regData.email && login.password === regData.password
    )
  );

  let message: string;

  if (success) {
    message = `Welcome ${matchedRegistrationData.firstName}`;
  } else if (wrongPassword) {
    message = "Wrong password";
  } else {
    message = "You are not registered";
  }
  return <h2>{message}</h2>;
}

export default Message;
