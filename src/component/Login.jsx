import React, { useState } from "react";
import style from "../pages/LoginPage/LoginPage.module.scss";

const Login = () => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const admin = "admin";
  function dataUser() {
    if (login === admin && password === admin) {
      localStorage.setItem("user", true);
    }
  }

  return (
    <div className={style.auth}>
      <form>
        <h3 className={style.textCenter}>Форма входа</h3>
        <div className={style.formGroup}>
          <input
            type="text"
            name="email"
            placeholder="Логин"
            className={style.formControlItem}
            onChange={(e) => setLogin(e.target.value)}
          />{" "}
        </div>
        <div className={style.formGroup}>
          <input
            type="password"
            name="Pass"
            placeholder="Пароль"
            className={style.formControlItem}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
        </div>
        <div className={style.formGroup}>
          <button className={style.btnSignin} type="submit" onClick={dataUser}>
            Вход в аккаунт
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
