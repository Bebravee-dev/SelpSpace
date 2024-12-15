import "./AboutUsSection.scss";
import noteBook from "./img/noteBook.png";
import DiscussButton from "../../Components/DiscussButton/DiscussButton";

const AboutUsSection = ({ toggleFeedback }) => {
  return (
    <div className="container">
      <div className="AboutUsSection">
        <div className="AboutUsSection__text">
          <h1>Немного о нас</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
        </div>
        <div className="AboutUsSection__notebook">
          <div className="AboutUsSection-left">
            <div className="AboutUsSection__stats">
              <div className="AboutUsSection__stats-item">
                <h1>100+</h1>
                <p>
                  реализованных <br />
                  проектов
                </p>
              </div>
              <div className="AboutUsSection__stats-item">
                <h1>4+</h1>
                <p>
                  Года опыта <br />в разработке
                </p>
              </div>
              <div className="AboutUsSection__stats-item">
                <h1>12</h1>
                <p>
                  Топовых <br />
                  специалистов
                </p>
              </div>
            </div>
            <div className="AboutUsSection__discuss_button">
              <DiscussButton toggleFeedback={toggleFeedback} />
            </div>
          </div>
          <div className="AboutUsSection-right">
            <img src={noteBook} alt="noteBook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
