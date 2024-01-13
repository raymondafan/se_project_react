import "./Header.css";
import avatarImage from "../../images/avatar.svg";
import logoImage from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
//in header we destructure onCreateModal
const Header = ({ onCreateModal, currentDate, weatherLocation = "" }) => {
  console.log("Header");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logoImage} alt="logo" />
        </div>
        <div>
          {currentDate}, {weatherLocation}
        </div>
      </div>

      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src={avatarImage} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header; //this header is the main  default exporting for Header.js
