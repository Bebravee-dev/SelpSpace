import "./DocumentsSection.scss";
import Path from "../../Components/Path/Path";

const DocumentsSection = () => {
  return (
    <div className="container">
      <Path firstWord="Главная" secondWord="Страница"></Path>
      <div className="Documents">
        <h1>Документы</h1>
        <ul>
          <li>Пользовательское соглашение</li>
          <li>Публичная оферта</li>
          <li>Ещё какой-то документ</li>
          <li>Обработка персональных данных</li>
          <li>Реквизиты</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentsSection;
