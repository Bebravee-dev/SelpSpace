import "./PersonalSection.scss";
import { useState, useEffect } from "react";

// Контент из базы данных
import content from "./content";

import green_point_icon from "./img/green_point_icon.svg";
import red_point_icon from "./img/red_point_icon.svg";
import yellow_point_icon from "./img/yellow_point_icon.svg";

import i_icon from "./img/i_icon.svg";
import doc_icon from "./img/doc_icon.svg";
import download_icon from "./img/download_icon.svg";
import trash_icon from "./img/trash_icon.svg";
import arrow_icon from "../../assets/img/arrow_icon.svg";
import down_icon from "./img/down_icon.svg";

import Path from "../../Components/Path/Path";

const PersonalSection = () => {
  const [Programs, SetPrograms] = useState([]);
  const [Balance, SetBalance] = useState(999999);
  const [UserName, SetUserName] = useState("UserName");

  const [showAllPrograms, setShowAllPrograms] = useState(false);

  const showAllProgramsFunc = () => {
    setShowAllPrograms(!showAllPrograms);
    console.log(showAllPrograms);
  };

  useEffect(() => {
    SetPrograms([...content]);
  }, []);

  return (
    <div className="container">
      <Path firstWord="Главная" secondWord="Личный кабинет"></Path>
      <div className="PersonalAccount">
        <div className="PersonalAccount__user-name">
          <div className="PersonalAccount__user-name-left">
            <p>{UserName}</p>
            <button>Редактировать</button>
          </div>
          <div className="PersonalAccount__user-name-right">
            <p className="PersonalAccount__user-name-right-first">баланс:</p>
            <p className="PersonalAccount__user-name-right-second">
              {Balance.toLocaleString("ru-RU")} руб.
            </p>
          </div>
        </div>
        <div className="PersonalAccount__programs">
          <div className="PersonalAccount__programs-name">
            <h1>Мои программы</h1>
            <p>
              Sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet,
            </p>
          </div>
          <div className="PersonalAccount__programs-content">
            {Programs.length > 0 ? (
              Programs.slice(0, showAllPrograms ? Programs.length : 3).map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="PersonalAccount__programs-content-item"
                    >
                      <div className="PersonalAccount__programs-content-item-div">
                        <div className="PersonalAccount__programs-content-item-div-text">
                          <div className="PersonalAccount__programs-content-item-name">
                            <p className="PersonalAccount__programs-content-item-name-first">
                              {item.name1}
                            </p>
                            <p className="PersonalAccount__programs-content-item-name-second">
                              {item.name2}
                            </p>
                          </div>
                          <div className="PersonalAccount__programs-content-item-stats">
                            {item.status !== "in development" ? (
                              <div className="PersonalAccount__programs-content-item-subscription_before">
                                <p>Подписка до:</p>
                                <div>
                                  <p>{item.subscription_before}</p>
                                  <button>(Продлить)</button>
                                </div>
                              </div>
                            ) : null}
                            <div className="PersonalAccount__programs-content-item-status">
                              <p>Статус:</p>
                              <div>
                                <p>{item.status}</p>
                                {item.status === "online" ? (
                                  <img
                                    src={green_point_icon}
                                    alt="online_point_icon"
                                  />
                                ) : null}
                                {item.status === "offline" ? (
                                  <img
                                    src={red_point_icon}
                                    alt="offline_point_icon"
                                  />
                                ) : null}
                                {item.status === "in development" ? (
                                  <img
                                    src={yellow_point_icon}
                                    alt="yellow_point_icon"
                                  />
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="PersonalAccount__programs-content-item-buttons">
                          <div className="PersonalAccount__programs-content-item-button">
                            <div className="PersonalAccount__programs-content-item-button-bg">
                              <img src={i_icon} alt="i_icon" />
                            </div>
                          </div>
                          <div className="PersonalAccount__programs-content-item-button">
                            <div className="PersonalAccount__programs-content-item-button-bg">
                              <img src={doc_icon} alt="doc_icon" />
                            </div>
                          </div>
                          <div className="PersonalAccount__programs-content-item-button">
                            <div className="PersonalAccount__programs-content-item-button-bg">
                              <img src={download_icon} alt="download_icon" />
                            </div>
                          </div>
                          <div className="PersonalAccount__programs-content-item-button">
                            <div className="PersonalAccount__programs-content-item-button-bg">
                              <img src={trash_icon} alt="trash_icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )
            ) : (
              <p className="font-Unbounded text-24px">У Вас нет программ</p>
            )}
          </div>
          {Programs.length > 3 ? (
            <button
              className="PersonalAccount__down-button flex justify-center"
              onClick={showAllProgramsFunc}
            >
              {showAllPrograms ? (
                <img
                  className="rotate-180"
                  src={down_icon}
                  alt="Toggle program visibility"
                />
              ) : (
                <img src={down_icon} alt="Toggle program visibility" />
              )}
            </button>
          ) : null}
        </div>
        <div className="PersonalAccount__guides">
          <div className="PersonalAccount__guides-name">
            <h1>Гайды</h1>
            <p>
              Sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet,
            </p>
          </div>
          <div className="PersonalAccount__guides-content">
            <div className="PersonalAccount__guides-content-item">
              <div className="PersonalAccount__guides-content-item-link">
                <p>01</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
              <h2>Техническая документация</h2>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div className="PersonalAccount__guides-content-item">
              <div className="PersonalAccount__guides-content-item-link">
                <p>02</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
              <h2>Техническая документация</h2>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div className="PersonalAccount__guides-content-item">
              <div className="PersonalAccount__guides-content-item-link">
                <p>03</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
              <h2>Техническая документация</h2>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div className="PersonalAccount__guides-content-item">
              <div className="PersonalAccount__guides-content-item-link">
                <p>04</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
              <h2>Техническая документация</h2>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div className="PersonalAccount__guides-content-item">
              <div className="PersonalAccount__guides-content-item-link">
                <p>05</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
              <h2>Техническая документация</h2>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
            <div className="PersonalAccount__guides-content-item">
              <div className="PersonalAccount__guides-content-item-link">
                <p>06</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
              <h2>Техническая документация</h2>
              <p>
                Sed quia consequuntur magni dolores eos qui ratione voluptatem
                sequi nesciunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalSection;
