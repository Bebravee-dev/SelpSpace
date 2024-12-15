import "./AuthenticationInput.scss";
const AuthenticationInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="AuthenticationInput"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default AuthenticationInput;
