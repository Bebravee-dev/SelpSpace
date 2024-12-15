import Logo from "../Logo/Logo";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-74px gap-50px bg-bg-color1">
      <Logo></Logo>
      <SocialIcons></SocialIcons>
      <h1 className="text-primary">© SELP.SPACE 2023-2024</h1>
    </div>
  );
};

export default Footer;
