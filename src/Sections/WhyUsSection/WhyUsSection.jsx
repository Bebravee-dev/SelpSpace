import "./WhyUsSection.scss";

import DiscussButton from "../../Components/DiscussButton/DiscussButton";

import item1_icon from "./img/item1_icon.svg";
import item2_icon from "./img/item2_icon.svg";
import item3_icon from "./img/item3_icon.svg";
import item4_icon from "./img/item4_icon.svg";

import heart_icon from "./img/Heart_icon.svg";

const WhyUsSection = ({ toggleFeedback }) => {
  return (
    <div className="container">
      <div className="WhyUsSection">
        <div className="WhyUsSection__name">
          <h1>А почему мы?</h1>
          <p>
            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velitS
          </p>
        </div>
        <div className="WhyUsSection__items-list">
          <div className="WhyUsSection__item item-1">
            <h1>
              Немного о том, почему люди доверяют автоматизацию <br /> именно
              нам
            </h1>
          </div>
          <div className="WhyUsSection__item item-2">
            <div className="WhyUsSection__item-text">
              <p>01</p>
              <h1>Полный цикл разработки</h1>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div>
              <div className="WhyUsSection__item-img">
                <img src={item1_icon} alt="item1 icon" />
              </div>
            </div>
          </div>
          <div className="WhyUsSection__item item-3">
            <div className="WhyUsSection__item-text">
              <p>02</p>
              <h1>Работаем по договору</h1>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div className="WhyUsSection__item-img">
              <img src={item2_icon} alt="item2 icon" />
            </div>
          </div>
          <div className="WhyUsSection__item item-4">
            <div className="WhyUsSection__item-text">
              <p>03</p>
              <h1>Конфиденциальность</h1>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div>
              <div className="WhyUsSection__item-img">
                <img src={item3_icon} alt="item3 icon" />
              </div>
            </div>
          </div>
          <div className="WhyUsSection__item item-5">
            <div className="WhyUsSection__item-text">
              <p>04</p>
              <h1>Делаем как для себя!</h1>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div>
              <div className="WhyUsSection__item-img">
                <img src={item4_icon} alt="item4 icon" />
              </div>
            </div>
          </div>

          <div className="WhyUsSection__item item-6">
            <div>
              <DiscussButton color={"white"} toggleFeedback={toggleFeedback} />
            </div>
          </div>
        </div>
        <div className="WhyUsSection__text-bottom">
          Забавный факт: 87% наших клиентов обращались к нам снова!
          <div>
            <img src={heart_icon} alt="heart icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
