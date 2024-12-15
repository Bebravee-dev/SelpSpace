import { useEffect } from "react";
import scrollToTop from "../utils/scrollToTop";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import DocumentsSection from "../Sections/DocumentsSection/DocumentsSection";

const ContactsPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="flex flex-col gap-section-gap">
      <div>
        <Header></Header>
        <DocumentsSection></DocumentsSection>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ContactsPage;
