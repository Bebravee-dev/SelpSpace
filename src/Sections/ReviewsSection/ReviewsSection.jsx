import "./ReviewsSection.scss";
import { useState, useRef, useEffect } from "react";
import next_button_icon from "../../assets/img/next_button_icon.svg";

// Типо данные из БД
import Reviews from "./Reviews";

const ReviewsSectionOld = () => {
  const [date, setDate] = useState([]);
  const reviewsRef = useRef(null);
  const itemWidth = 360;
  const visibleItems = 4;

  useEffect(() => {
    setDate([...Reviews]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (reviewsRef.current) {
        const scrollLeft = reviewsRef.current.scrollLeft;
        const scrollWidth = reviewsRef.current.scrollWidth;
        const clientWidth = reviewsRef.current.clientWidth;

        const maxScrollLeft = scrollWidth - clientWidth;
        if (scrollLeft >= maxScrollLeft) {
          reviewsRef.current.scrollLeft = maxScrollLeft;
        }
      }
    };

    const container = reviewsRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollTo = (direction) => {
    if (reviewsRef.current) {
      const scrollAmount = itemWidth * visibleItems;
      if (direction === "forward") {
        reviewsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else if (direction === "backward") {
        reviewsRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="ReviewsSection">
      <div className="ReviewsSection-buttons">
        <img
          src={next_button_icon}
          alt="next_button_icon"
          onClick={() => scrollTo("backward")}
        />
        <img
          className="ReviewsSection-button-second"
          src={next_button_icon}
          alt="next_button_icon"
          onClick={() => scrollTo("forward")}
        />
      </div>
      <div className="container">
        <div className="ReviewsSection__content">
          <div className="ReviewsSection__header ">
            <h1 className="section-header-h1">Отзывы о нашей работе</h1>
          </div>
          <div className="ReviewsSection__reviews-section" ref={reviewsRef}>
            {date.map((item, idx) => (
              <div key={idx} className="review-container">
                <div className="review-container-stop-point"></div>
                <div className="review-container-upper-text">
                  <h2 className="review-container__name">{item.name}</h2>
                  <p className="review-container__text">{item.text}</p>
                </div>
                <h3 className="review-container__platform">{item.platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSectionOld;
