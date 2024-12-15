import "./OurContacts.scss";

import Path from "../../Components/Path/Path";

import ds_icon from "./img/ds_icon.png";
import vk_icon from "./img/vk_icon.png";
import tg_icon from "./img/tg_icon.png";

const OurContacts = () => {
  return (
    <div className="container">
      <Path firstWord="Главная" secondWord="Контакты"></Path>
      <div className="OurContacts pt-200px">
        <div className="OurContacts__name">
          <h1 className="section-header-h1">Наши контакты</h1>
          <p className="section-header-p w-full">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. spiciatis unde omnis iste natus error sit
            voluptatem accusa
          </p>
        </div>
        <div className="OurContacts__conten mt-100px flex justify-between gap-5 max-md:flex-col">
          <div className="OurContacts__content-item ds-item w-full">
            <div>
              <img src={ds_icon} alt="ds icon" />
            </div>
            <p className="text-primary text-xl font-Unbounded font-semibold">
              Мы в Discord
            </p>
          </div>
          <div className="OurContacts__content-item vk-item w-full">
            <div>
              <img src={vk_icon} alt="vk icon" />
            </div>
            <p className="text-primary text-xl font-Unbounded font-semibold">
              Мы в VK
            </p>
          </div>
          <div className="OurContacts__content-item tg-item w-full">
            <div>
              <img src={tg_icon} alt="tg icon" />
            </div>
            <p className="text-primary text-xl font-Unbounded font-semibold">
              Мы в Telegram
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurContacts;
