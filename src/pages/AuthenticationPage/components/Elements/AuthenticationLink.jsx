import "./AuthenticationLink.scss";

const AuthenticationLink = ({ text, onClick }) => {
  return (
    <button className="AuthenticationLink" onClick={onClick}>
      {" "}
      {text}{" "}
    </button>
  );
};

export default AuthenticationLink;
