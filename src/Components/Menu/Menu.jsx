import "./Menu.scss";
import { Link } from "react-router-dom";

import arrow_icon from "../../assets/img/arrow_icon.svg";
import SocialIcons from "../SocialIcons/SocialIcons";

const Menu = ({ toggleMenu }) => {
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="Menu" onClick={toggleMenu}>
      <div className="Menu-content" onClick={handleContentClick}>
        <div className="Menu-content-left">
          <h1 className="font-Unbounded text-48px font-bold text-primary">
            Меню
          </h1>
        </div>
        <div className="Menu-content-right">
          <div className="Menu-content__links">
            <Link className="Menu-item" to="/">
              <p>Главная</p>
            </Link>
            <Link className="Menu-item" to="/services">
              <p>Наши услуги</p>
            </Link>
            <Link className="Menu-item" to="/products">
              <p>Товары</p>
            </Link>
            <Link className="Menu-item" to="/contacts">
              <p>Контакты</p>
            </Link>
            <Link className="Menu-item" to="/documents">
              <p>Документы</p>
            </Link>
            <Link className="Menu-item" to="/personal">
              <p>Личный кабинет</p>
              <div>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
            </Link>
            <Link className="Menu-item" to="/">
              <p>Отзывы</p>
              <div>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
            </Link>
          </div>
          <div className="Menu-content__other-links">
            <h2>
              Другие проекты: <br /> <span>SELP.COMP</span>{" "}
            </h2>
            <div className="pb-2">
              <SocialIcons></SocialIcons>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
