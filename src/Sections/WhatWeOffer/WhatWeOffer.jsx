import "./WhatWeOffer.scss";
import { useState } from "react";
import temp_img from "./img/temp_img.png";
import next_button_icon from "../../assets/img/next_button_icon.svg";

import MoreDetails from "../../Components/MoreDetails/MoreDetails";

const WhatWeOffer = () => {
  const [onLeftAction, setOnLeftAction] = useState(false);
  const [onRightAction, setOnRightAction] = useState(false);

  const [images, setImages] = useState([
    { path: temp_img, pos: "left" },
    { path: temp_img, pos: "midl" },
    { path: temp_img, pos: "right" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeMainImage = (direction) => {
    // Запускаем анимацию
    if (direction === "forward") {
      setOnLeftAction(true);
    } else if (direction === "backward") {
      setOnRightAction(true);
    }

    // После окончания анимации (1с) меняем изображение
    setTimeout(() => {
      const totalImages = images.length;

      if (direction === "forward") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
      } else if (direction === "backward") {
        setCurrentIndex(
          (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
        );
      }

      // Останавливаем анимацию
      setOnLeftAction(false);
      setOnRightAction(false);
    }, 300); // Длительность анимации
  };

  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  const sortedVisibleImages = visibleImages.map((img, index) => {
    const positions = ["left side-img", "midl", "right side-img"];
    return { ...img, pos: positions[index] };
  });

  return (
    <div className="container">
      <div className="WhatWeOffer">
        <div className="WhatWeOffer__name">
          <h1>Что мы предлагаем</h1>
          <p>
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non
          </p>
        </div>
        <div className="WhatWeOffer__images">
          <div className="WhatWeOffer__next-buttons">
            <img
              src={next_button_icon}
              alt="next button icon"
              onClick={() => changeMainImage("backward")}
            />
            <img
              src={next_button_icon}
              alt="next button icon"
              onClick={() => changeMainImage("forward")}
            />
          </div>
          {sortedVisibleImages.map((item, index) => {
            const baseClass = `image-${item.pos}`;

            let animationClass = "";
            if (item.pos === "midl" && onLeftAction) {
              animationClass = "moveLeftMid";
            } else if (item.pos === "midl" && onRightAction) {
              animationClass = "moveRightMid";
            } else if (item.pos === "left side-img" && onLeftAction) {
              animationClass = "moveLeftLeft";
            } else if (item.pos === "left side-img" && onRightAction) {
              animationClass = "moveRightLeft";
            } else if (item.pos === "right side-img" && onLeftAction) {
              animationClass = "moveLeftRight";
            } else if (item.pos === "right side-img" && onRightAction) {
              animationClass = "moveRightRight";
            }

            return (
              <img
                key={index}
                src={item.path}
                alt={item.pos}
                className={`${baseClass} ${animationClass}`}
              />
            );
          })}
        </div>
      </div>
      <div className="WhatWeOffer__text">
        <h1>SELP.SELLER</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
        </p>
        <MoreDetails text="ПОДРОБНЕЕ"></MoreDetails>
      </div>
    </div>
  );
};

export default WhatWeOffer;
