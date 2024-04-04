import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
const SideBar = () => {
  const currentUser= useContext(CurrentUserContext);

  return (
    <div className="sideBar">
      <img src={currentUser.avatar} alt="logo" />

      <div className="sideBar__user">{currentUser.name}</div>
    </div>
  );
};
export default SideBar;
