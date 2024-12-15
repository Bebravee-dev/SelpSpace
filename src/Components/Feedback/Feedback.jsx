import "./Feedback.scss";
import MoreDetails from "../MoreDetails/MoreDetails";

const Feedback = ({ toggleFeedback }) => {
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="Feedback" onClick={toggleFeedback}>
      <div className="Feedback-content" onClick={handleContentClick}>
        <div className="Feedback-content-left">
          <h1>
            Обратная <br /> связь
          </h1>
        </div>
        <div className="Feedback-content-right">
          <div className="Feedback-content-right__inputs">
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
  );
};

export default Feedback;
