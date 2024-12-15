import "./OurProductsSection.scss";

import noteBook from "./img/noteBook.png";
import MoreDetails from "../../Components/MoreDetails/MoreDetails";
import Path from "../../Components/Path/Path";

const OurProducts = () => {
  return (
    <div className="container">
      <Path firstWord="Главная" secondWord="Продукты"></Path>

      <div className="OurProducts">
        <div className="OurProducts__header">
          <h1>Наши продукты</h1>
          <p>
            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit
          </p>
        </div>
        <div className="OurProducts__content">
          <div className="OurProducts__content-item">
            <img
              className="OurProducts__content-item-img"
              src={noteBook}
              alt="noteBook"
            />
            <div className="OurProducts__content-item-text">
              <h1>SELP.SELLER</h1>
              <p>
                quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="OurProducts__content-item-discuss-btn">
              <MoreDetails text="ПОДРОБНЕЕ" />
            </div>
          </div>
          <div className="OurProducts__content-item">
            <img
              className="OurProducts__content-item-img"
              src={noteBook}
              alt="noteBook"
            />
            <div className="OurProducts__content-item-text">
              <h1>SELP.SELLER</h1>
              <p>
                quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="OurProducts__content-item-discuss-btn">
              <MoreDetails text="ПОДРОБНЕЕ" />
            </div>
          </div>
          <div className="OurProducts__content-item">
            <img
              className="OurProducts__content-item-img"
              src={noteBook}
              alt="noteBook"
            />
            <div className="OurProducts__content-item-text">
              <h1>SELP.SELLER</h1>
              <p>
                quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quaerat voluptatem.
              </p>
            </div>
            <div className="OurProducts__content-item-discuss-btn">
              <MoreDetails text="ПОДРОБНЕЕ" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
