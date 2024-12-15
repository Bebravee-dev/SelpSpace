import { useEffect } from "react";
import scrollToTop from "../utils/scrollToTop";
import Header from "../Components/Header/Header";
import OurContacts from "../Sections/OurContacts/OurContacts";
import OtherQuestions from "../Sections/OtherQuestions/OtherQuestions";
import Footer from "../Components/Footer/Footer";

const ContactsPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="flex flex-col gap-section-gap">
      <div>
        <Header></Header>
        <OurContacts></OurContacts>
      </div>

      <div>
        <OtherQuestions></OtherQuestions>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ContactsPage;
