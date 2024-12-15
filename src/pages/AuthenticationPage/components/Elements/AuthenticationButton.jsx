import "./AuthenticationButton.scss";

const AuthenticationButton = ({ text, onClick }) => {
  return (
    <button className="AuthenticationButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default AuthenticationButton;
