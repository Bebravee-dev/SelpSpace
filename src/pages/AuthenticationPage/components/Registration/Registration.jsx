import { useState } from "react";
import "./Registration.scss";

import AuthenticationInput from "../Elements/AuthenticationInput";
import AuthenticationName from "../Elements/AuthenticationName";
import AuthenticationButton from "../Elements/AuthenticationButton";
import AuthenticationLink from "../Elements/AuthenticationLink";

const Authorization = ({ onClick }) => {
  const [loginValue, setLoginValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const onLog = () => {
    console.log("Регистрация");
  };

  return (
    <form className="Registration">
      <AuthenticationName text="Регистрация" />
      <div className="Registration-inputs">
        <AuthenticationInput
          type="text"
          placeholder="Логин"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
        />
        <AuthenticationInput
          type="text"
          placeholder="Почта"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <AuthenticationInput
          type="password"
          placeholder="Пароль"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
      </div>
      <AuthenticationButton
        text="Регистрация"
        onClick={() => {
          onLog();
        }}
      />
      <AuthenticationLink text="Есть аккаунта?" onClick={onClick} />
    </form>
  );
};

export default Authorization;
