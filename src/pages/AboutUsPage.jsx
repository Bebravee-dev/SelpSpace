import { useEffect, useState } from "react";
import scrollToTop from "../utils/scrollToTop";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import HeroSection2 from "../Sections/HeroSection2/HeroSection2";
import WhoWeAreSection from "../Sections/WhoWeAreSection/WhoWeAreSection";
import ReviewsSection from "../Sections/ReviewsSection/ReviewsSection";
import OtherQuestions from "../Sections/OtherQuestions/OtherQuestions";

import Feedback from "../Components/Feedback/Feedback";

const AboutUsPage = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const toggleFeedback = () => {
    setIsFeedbackOpen(!isFeedbackOpen);
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="flex flex-col gap-150px">
      <div>
        {isFeedbackOpen ? <Feedback toggleFeedback={toggleFeedback} /> : null}
        <Header></Header>
        <HeroSection2></HeroSection2>
      </div>
      <WhoWeAreSection toggleFeedback={toggleFeedback}></WhoWeAreSection>
      <ReviewsSection></ReviewsSection>
      <div>
        <OtherQuestions></OtherQuestions>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AboutUsPage;
