import "./DiscussButton.scss";

import discuss_text from "./img/discuss_text.svg";
import white_discuss_text from "./img/white_discuss_text.svg";
import arrow_icon from "../../assets/img/arrow_icon.svg";
import white_arrow_icon from "../../assets/img/white_arrow_icon.svg";

const DiscussButton = ({ color, toggleFeedback }) => {
  return (
    <div className="DiscussButton" onClick={toggleFeedback}>
      <img
        src={color == "white" ? white_discuss_text : discuss_text}
        alt="discuss text"
      />
      <img
        className="DiscussButton__arrow-icon white-arrow-icon"
        src={white_arrow_icon}
        alt="arrow icon"
      />
      <img
        className="DiscussButton__arrow-icon red-arrow-icon"
        src={arrow_icon}
        alt="arrow icon"
      />
    </div>
  );
};

export default DiscussButton;
