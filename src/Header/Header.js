import "./Header.css";

//in header we destructure onCreateModal
const Header = ({onCreateModal, currentDate, weatherLocation=""}) => {
  console.log("Header");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/logo.svg").default} alt="logo" />
        </div>
        <div>{currentDate}, {weatherLocation}</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button className="header__button" type="text" onClick={onCreateModal}>+ Add Clothes</button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src= {require("../images/avatar.svg").default} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header; //this header is the main  default exporting for Header.js
