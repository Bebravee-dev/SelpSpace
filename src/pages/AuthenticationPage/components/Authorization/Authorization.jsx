import { useState } from "react";
import "./Authorization.scss";

import AuthenticationInput from "../Elements/AuthenticationInput";
import AuthenticationName from "../Elements/AuthenticationName";
import AuthenticationButton from "../Elements/AuthenticationButton";
import AuthenticationLink from "../Elements/AuthenticationLink";

const Authorization = ({ onClick }) => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onLog = () => {
    console.log("Вход");
  };

  return (
    <form className="Authorization">
      <AuthenticationName text="Авторизация" />
      <div className="Authorization-inputs">
        <AuthenticationInput
          type="text"
          placeholder="Логин"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
        />
        <AuthenticationInput
          type="password"
          placeholder="Пароль"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
      </div>

      <AuthenticationButton
        text="Войти"
        onClick={() => {
          onLog();
        }}
      />
      <AuthenticationLink text="Нет аккаунта?" onClick={onClick} />
    </form>
  );
};

export default Authorization;
