import mouse_icon from "./img/mouse_icon.svg";

import SocialIcons from "../../Components/SocialIcons/SocialIcons";

const HeroSection2 = () => {
  return (
    <div className="container">
      <div className="h-950px flex flex-col items-center justify-between p-52px">
        <div></div>
        <div className="flex flex-col justify-center items-center gap-60px">
          <div className="flex flex-col justify-center items-center gap-20px">
            <h1 className="text-primary text-48px font-bold font-Unbounded text-center">
              Немного о том, что такое{" "}
              <span className="bg-custom-gradient px-5px">SELP.SPACE</span>
            </h1>
            <p className="text-center max-w-1088px text-16px text-secondary font-Involve">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quiit
            </p>
          </div>
          <SocialIcons></SocialIcons>
        </div>
        <div className="flex flex-col gap-10px items-center">
          <h2 className="text-primary text-base font-Involve font-medium">
            Подробнее
          </h2>
          <div>
            <img src={mouse_icon} alt="mouse icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
