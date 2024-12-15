import { useEffect } from "react";
import scrollToTop from "../utils/scrollToTop";
import Header from "../Components/Header/Header";
import PersonalSection from "../Sections/PersonalSection/PersonalSection";
import Footer from "../Components/Footer/Footer";

const ServicesPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="flex flex-col gap-section-gap">
      <div>
        <Header></Header>
        <PersonalSection></PersonalSection>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ServicesPage;
