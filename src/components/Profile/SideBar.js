
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import avatarImage from "../../images/avatar.svg";
const SideBar = () => {
  return (
     
    <div className="header__avatar-logo">
        <div>
        <img src={avatarImage} alt="logo" />
      </div>
      <Link className="header__name" to="/profile">
        Name
      </Link>

      
    </div>
  );
};
export default SideBar;
