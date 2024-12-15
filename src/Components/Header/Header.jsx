import "./Header.scss";

import { useState, useEffect } from "react";

import menu_btn_icon from "./img/menu_btn_icon.svg";
import account_icon from "./img/account_icon.svg";
import Logo from "../Logo/Logo";

import Menu from "../Menu/Menu";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <header className={`Header ${isHidden ? "header--hidden" : ""}`}>
        <div className="container">
          <div className="Header-content">
            <img
              className="Header__menu-icon"
              src={menu_btn_icon}
              alt="menu button"
              onClick={toggleMenu}
            />
            <Logo />
            <div className="Header__account-button">
              <img
                className="Header__account-icon"
                src={account_icon}
                alt="account icon"
              />
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div>
          <Menu toggleMenu={toggleMenu} />
        </div>
      )}
    </div>
  );
};

export default Header;
