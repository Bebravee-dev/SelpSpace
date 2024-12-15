import "./WhoWeAreSection.scss";

import line_icon from "./img/line_icon.svg";

import DiscussButton from "../../Components/DiscussButton/DiscussButton";

import item1_icon from "./img/item1_icon.png";
import item2_icon from "./img/item2_icon.png";
import item3_icon from "./img/item3_icon.png";
import item4_icon from "./img/item4_icon.png";

const WhoWeAreSection = ({ toggleFeedback }) => {
  return (
    <div className="container">
      <div className="WhoWeAreSection">
        <div className="WhoWeAreSection__header">
          <h1>Кто мы такие?</h1>
          <p>
            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatu
          </p>
        </div>
        <div className="WhoWeAreSection__stats">
          <p className="WhoWeAreSection__stats-p">
            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          </p>
          <div className="WhoWeAreSection__stats-numbers">
            <div className="WhoWeAreSection__stats-numbers-item">
              <h2>100+</h2>
              <img src={line_icon} alt="line icon" />
              <p>реализованных проектов</p>
            </div>
            <div className="WhoWeAreSection__stats-numbers-item">
              <h2>4+</h2>
              <img src={line_icon} alt="line icon" />
              <p>Года опыта в разработке</p>
            </div>
            <div className="WhoWeAreSection__stats-numbers-item">
              <h2>12</h2>
              <img src={line_icon} alt="line icon" />
              <p>Топовых специалистов</p>
            </div>
          </div>
        </div>
        <div className="WhoWeAreSection__header">
          <h1>Имеем богатый опыт с 2019 года</h1>
          <p>
            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatu
          </p>
        </div>
        <div className="WhoWeAreSection__items-list">
          <div className="WhoWeAreSection__item item-1">
            <h1>
              Немного о том, почему люди доверяют автоматизацию <br /> именно
              нам
            </h1>
          </div>
          <div className="WhoWeAreSection__item item-2 leng-item">
            <div className="WhoWeAreSection__item-text">
              <p>01</p>
              <h1>Полный цикл разработки</h1>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div>
              <div className="WhoWeAreSection__item-img leng">
                <img src={item1_icon} alt="item1 icon" />
              </div>
            </div>
          </div>
          <div className="WhoWeAreSection__item item-3 leng-item">
            <div className="WhoWeAreSection__item-text">
              <p>02</p>
              <h1>Работаем по договору</h1>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div>
              <div className="WhoWeAreSection__item-img leng">
                <img src={item2_icon} alt="item2 icon" />
              </div>
            </div>
          </div>
          <div className="WhoWeAreSection__item item-4 leng-item">
            <div className="WhoWeAreSection__item-text">
              <p>03</p>
              <h1>Конфиденциальность</h1>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div>
              <div className="WhoWeAreSection__item-img leng">
                <img src={item3_icon} alt="item3 icon" />
              </div>
            </div>
          </div>
          <div className="WhoWeAreSection__item item-5 leng-item">
            <div className="WhoWeAreSection__item-text">
              <p>04</p>
              <h1>Делаем как для себя!</h1>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div>
              <div className="WhoWeAreSection__item-img leng">
                <img src={item4_icon} alt="item4 icon" />
              </div>
            </div>
          </div>

          <div className="WhoWeAreSection__item item-6">
            <div>
              <DiscussButton color={"white"} toggleFeedback={toggleFeedback} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
