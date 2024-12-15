import "./Path.scss";

const Path = ({ firstWord, secondWord }) => {
  return (
    <div className="container">
      <div className="Path">
        <p>
          {firstWord} / <span>{secondWord}</span>
        </p>
      </div>
    </div>
  );
};

export default Path;
