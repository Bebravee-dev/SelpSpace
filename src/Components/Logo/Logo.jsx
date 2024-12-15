import "./Logo.scss";

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="Header__logo" to="/">
      <span className="Header__logo-highlight">SELP</span>SPACE
    </Link>
  );
};

export default Logo;
