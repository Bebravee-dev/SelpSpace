import "./HeroSection.scss";
import { Navigate, useNavigate } from "react-router-dom";

import SocialIcons from "../../Components/SocialIcons/SocialIcons";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGoToProducts = () => {
    navigate("/products");
  };

  const handleGoToServices = () => {
    navigate("/services");
  };

  return (
    <div className="HeroSection__bg">
      <div className="container">
        <div className="HeroSection">
          <div className="HeroSection-text">
            <h1 className="HeroSection-primary-text">
              Доверьте автоматизацию <br /> вашей работы
              <span className="HeroSection-primary-text-highlight">
                профессионалам
              </span>
            </h1>
            <p className="HeroSection-secondary-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta est, qui dolorem ipsum quia dolor
            </p>
          </div>
          <div className="HeroSection-buttons">
            <button
              className="HeroSection-first-btn"
              onClick={handleGoToProducts}
            >
              Готовый продукт
            </button>
            <button
              className="HeroSection-second-btn"
              onClick={handleGoToServices}
            >
              Заказать кастом
            </button>
          </div>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
