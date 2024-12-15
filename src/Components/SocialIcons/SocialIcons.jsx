import "./SocialIcons.scss";

import ds_icon from "./img/ds_icon.svg";
import tg_icon from "./img/tg_icon.svg";
import vk_icon from "./img/vk_icon.svg";

const SocialIcons = () => {
  return (
    <div className="SocialIcons">
      <div>
        <img className="SocialIcons-ds" src={ds_icon} alt="discord icon" />
      </div>
      <div>
        <img className="SocialIcons-tg" src={tg_icon} alt="telegram icon" />
      </div>
      <div>
        <img className="SocialIcons-vk" src={vk_icon} alt="vk icon" />
      </div>
    </div>
  );
};

export default SocialIcons;
