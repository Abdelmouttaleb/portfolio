export function getIsUserLogedin() {
  const registrationData = JSON.parse(
    localStorage.getItem("registrationData") || "[]"
  );
  const loginData = JSON.parse(localStorage.getItem("loginData") || "[]");
  return registrationData.some((regData: any) =>
    loginData.some(
      (login: any) =>
        login.email === regData.email && login.password === regData.password
    )
  );
}
