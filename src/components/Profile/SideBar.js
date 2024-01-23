import { Link } from "react-router-dom/cjs/react-router-dom.min";
import avatarImage from "../../images/avatar.svg";
import "./SideBar.css"
const SideBar = () => {
  const username = "Name";
  return (
    <div className="sideBar">
      <img src={avatarImage} alt="logo" />

      <div className="sideBar__user">{username}</div>
    </div>
  );
};
export default SideBar;
