import "./Header.css";
import logoImage from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
//in header we destructure onCreateModal

const Header = ({
  onCreateModal,
  currentDate,
  weatherLocation = "",
  onRegisterModal,
  onLoginModal,
  isLoggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  // console.log("Header");
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logoImage} alt="logo" />
          </Link>
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

        {!isLoggedIn ? (
          <button
            className="header__button"
            type="text"
            onClick={onRegisterModal}
          >
            Sign Up
          </button>
        ) : (
          <Link className="header__name" to="/profile">
            {currentUser.name}
          </Link>
        )}

        {!isLoggedIn ? (
          <button className="header__button" type="text" onClick={onLoginModal}>
            Log in
          </button>
        ) : (
          <div>
            <img
              className="header__avatar"
              src={currentUser.avatar}
              alt="logo"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; //this header is the main  default exporting for Header.js
