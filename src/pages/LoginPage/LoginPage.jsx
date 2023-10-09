import React from "react";
import Login from "../../component/Login";
import style from "../LoginPage/LoginPage.module.scss";
const LoginPage = () => {
  return (
    <div className={style.loginPage}>
      <Login />
    </div>
  );
};

export default LoginPage;
