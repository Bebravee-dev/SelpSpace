import { useEffect } from "react";
import scrollToTop from "../utils/scrollToTop";
import Header from "../Components/Header/Header";
import OurProductsSection from "../Sections/OurProductsSection/OurProductsSection";
import OtherQuestions from "../Sections/OtherQuestions/OtherQuestions";
import Footer from "../Components/Footer/Footer";

const MainPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="flex flex-col gap-section-gap">
      <div>
        <Header></Header>
        <OurProductsSection></OurProductsSection>
      </div>

      <div>
        <OtherQuestions></OtherQuestions>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainPage;
