import "./OtherQuestions.scss";

import MoreDetails from "../../Components/MoreDetails/MoreDetails";
import point_icon from "../../assets/img/point_icon.svg";

const OtherQuestions = () => {
  return (
    <div className="OtherQuestions">
      <div className="container">
        <div className="OtherQuestions__content">
          <div className="OtherQuestions__left-content">
            <div className="OtherQuestions__left-content__header">
              <h1>Остались вопросы?</h1>
              <p>
                Оставьте заявку и наш менеджер свяжется с вами в ближайшие
                несколько минут для уточнения подробностей.
              </p>
            </div>
            <div className="OtherQuestions__right-content-mid">
              <div className="OtherQuestions__right-content__inputs-mid">
                <input type="text" placeholder="ФИО" />
                <input type="text" placeholder="Telegram" />
                <input
                  type="text"
                  placeholder="Другие способы связи (Опционально)"
                />
                <input type="text" placeholder="Текст сообщения" />
              </div>
              <div>
                <MoreDetails text="ОТПРАВИТЬ ЗАЯВКУ" />
              </div>
            </div>
            <div className="OtherQuestions__left-content__contacts">
              <p>Или напишите нам</p>
              <ul>
                <li>
                  {" "}
                  <img src={point_icon} alt="point_icon" /> Мы в VK
                </li>
                <li>
                  {" "}
                  <img src={point_icon} alt="point_icon" />
                  Мы в Telegram
                </li>
                <li>
                  {" "}
                  <img src={point_icon} alt="point_icon" />
                  Мы в Discord
                </li>
              </ul>
            </div>
          </div>
          <div className="OtherQuestions__right-content">
            <div className="OtherQuestions__right-content__inputs">
              <input type="text" placeholder="ФИО" />
              <input type="text" placeholder="Telegram" />
              <input
                type="text"
                placeholder="Другие способы связи (Опционально)"
              />
              <input type="text" placeholder="Текст сообщения" />
            </div>
            <div>
              <MoreDetails text="ОТПРАВИТЬ ЗАЯВКУ" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherQuestions;
