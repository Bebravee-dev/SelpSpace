import { useEffect } from "react";
import scrollToTop from "../utils/scrollToTop";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import MoreDetils from "../Components/MoreDetails/MoreDetails";

const ErrorPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <Header />
      </div>
      <div className="h-screen flex flex-col justify-center items-center relative">
        <div className="flex flex-col font-Unbounded justify-center items-center">
          <h1 className="text-black text-500px leading-20 font-semibold">
            404
          </h1>
          <p className="text-white font-Involve text-16px font-semibold">
            Не знаю что ты ожидал найти, но тут ничего нет.
          </p>
        </div>
        <div className="flex justify-center absolute bottom-10">
          <MoreDetils text="Назад на главную"></MoreDetils>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
