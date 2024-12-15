import { useEffect, useState } from "react";
import scrollToTop from "../utils/scrollToTop";
import Header from "../Components/Header/Header";
import HeroSection from "../Sections/HeroSection/HeroSection";
import AboutUsSection from "../Sections/AboutUsSection/AboutUsSection";
import WhyUsSection from "../Sections/WhyUsSection/WhyUsSection";
import WhatWeOffer from "../Sections/WhatWeOffer/WhatWeOffer";
import ReviewsSection from "../Sections/ReviewsSection/ReviewsSection";
import FAQSection from "../Sections/FAQSection/FAQSection";
import OtherQuestions from "../Sections/OtherQuestions/OtherQuestions";
import Footer from "../Components/Footer/Footer";

import Feedback from "../Components/Feedback/Feedback";

const MainPage = () => {
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
        <Header />
        <HeroSection />
      </div>

      <AboutUsSection toggleFeedback={toggleFeedback} />
      <WhyUsSection toggleFeedback={toggleFeedback} />
      <WhatWeOffer />
      <ReviewsSection />
      <FAQSection toggleFeedback={toggleFeedback} />
      <div>
        <OtherQuestions />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
