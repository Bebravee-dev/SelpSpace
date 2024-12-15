import "./OurServices.scss";

import MoreDetails from "../../Components/MoreDetails/MoreDetails";
import Path from "../../Components/Path/Path";

import noteBook from "./img/noteBook.png";
import phone from "./img/phone.png";

const OurServices = () => {
  return (
    <div className="container">
      <Path firstWord="Главная" secondWord="Услуги"></Path>
      <div className="OurServices flex flex-col gap-150px">
        <div className="OurServices__name">
          <h1>Наши услуги</h1>
          <p>
            Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit
          </p>
        </div>

        <div className="OurSection__img-section flex gap-170px items-center">
          <div className="flex flex-col max-w-580px gap-50px">
            <h1 className="text-primary text-40px font-Unbounded font-medium leading-10">
              Разработка софта под ключ
            </h1>
            <p className="text-secondary text-16px font-Involve font-normal leading-5">
              quia dolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam.
            </p>
            <div>
              <MoreDetails text="ПОДРОБНЕЕ"></MoreDetails>
            </div>
          </div>
          <div>
            <img
              className="OurServices__img rounded-3xl"
              src={noteBook}
              alt="note book"
            />
          </div>
        </div>

        <div className="OurSection__img-section flex gap-170px items-center">
          <div>
            <img
              className="OurServices__img rounded-3xl"
              src={phone}
              alt="phone"
            />
          </div>
          <div className="flex flex-col max-w-602px gap-50px">
            <h1 className="text-primary text-40px font-Unbounded font-medium leading-10">
              Дизайн и оформление
            </h1>
            <p className="text-secondary text-16px font-Involve font-normal leading-5">
              quia dolor sit amet, consectetur, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam.
            </p>
            <div>
              <MoreDetails text="ПОДРОБНЕЕ"></MoreDetails>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
