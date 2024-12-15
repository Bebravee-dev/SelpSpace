import "./MoreDetails.scss";

import arrow_icon from "../../assets/img/arrow_icon.svg";

const MoreDetails = ({ text, to }) => {
  return (
    <button className="MoreDetails">
      {text} <img src={arrow_icon} alt="arrow icon" />
    </button>
  );
};

export default MoreDetails;
