import { useState } from "react";
import "./AuthenticationPage.scss";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Registration from "./components/Registration/Registration";
import Authorization from "./components/Authorization/Authorization";

const AuthenticationPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Header />
      <div className="AuthenticationPage">
        <div className="AuthenticationPage-content">
          {isLogin ? (
            <Authorization onClick={() => setIsLogin(!isLogin)}></Authorization>
          ) : (
            <Registration onClick={() => setIsLogin(!isLogin)}></Registration>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthenticationPage;
