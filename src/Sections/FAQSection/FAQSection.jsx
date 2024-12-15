import "./FAQSection.scss";

import double_arrow_icon from "./img/double_arrow_icon.svg";
import noteBook from "./img/noteBook.png";
import DiscussButton from "../../Components/DiscussButton/DiscussButton";

const FAQSection = ({ toggleFeedback }) => {
  return (
    <div className="container">
      <div className="FAQSection">
        <div className="FAQSection__header">
          <h1>F.A.Q</h1>
          <p>
            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit
          </p>
        </div>
        <div className="FAQSection__main-content">
          <div className="FAQSection__questions">
            <div className="FAQSection__questions-item">
              <p>Сколько стоит сделать?</p>
              <div>
                <img src={double_arrow_icon} alt="double_arrow_icon" />
              </div>
            </div>
            <div className="FAQSection__questions-item">
              <p>Какие сроки разработки?</p>
              <div>
                <img src={double_arrow_icon} alt="double_arrow_icon" />
              </div>
            </div>
            <div className="FAQSection__questions-item">
              <p>Как принимаете оплату?</p>
              <div>
                <img src={double_arrow_icon} alt="double_arrow_icon" />
              </div>
            </div>
            <div className="FAQSection__questions-item">
              <p>Какие гарантии?</p>
              <div>
                <img src={double_arrow_icon} alt="double_arrow_icon" />
              </div>
            </div>
            <div className="FAQSection__questions-item">
              <p>На каком языке разрабатывается софт?</p>
              <div>
                <img src={double_arrow_icon} alt="double_arrow_icon" />
              </div>
            </div>
            <div className="FAQSection__questions-item">
              <p>Что нужно вам предоставить для начала работы?</p>
              <div>
                <img src={double_arrow_icon} alt="double_arrow_icon" />
              </div>
            </div>
          </div>
          <div className="FAQSection__image">
            <img
              className="FAQSection__image-notebook"
              src={noteBook}
              alt="noteBook"
            />
            <div className="FAQSection__image-discuss-btn">
              <DiscussButton color="white" toggleFeedback={toggleFeedback} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
