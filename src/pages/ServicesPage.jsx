import { useEffect } from "react";
import scrollToTop from "../utils/scrollToTop";
import Header from "../Components/Header/Header";
import OurServices from "../Sections/OurServices/OurServices";
import OtherQuestions from "../Sections/OtherQuestions/OtherQuestions";
import Footer from "../Components/Footer/Footer";

const ServicesPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="flex flex-col gap-section-gap">
      <div>
        <Header></Header>
        <OurServices></OurServices>
      </div>

      <div>
        <OtherQuestions></OtherQuestions>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ServicesPage;
