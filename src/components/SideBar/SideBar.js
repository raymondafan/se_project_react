import "./SideBar.css";
const SideBar = ({ currentUserSideBar, onEditProfile }) => {
  return (
    <div className="sideBar">
      <div className="sideBar__info">
        <img
          className="sideBar__avatar"
          src={currentUserSideBar.avatar}
          alt="logo"
        />
        <div className="sideBar__user">{currentUserSideBar.name}</div>
      </div>
      <div className="sideBar__buttons">
        <div>
          <button
            className="sideBar__edit-button"
            type="text"
            onClick={onEditProfile}
          >
            Change Profile Data
          </button>
        </div>
        <div>
          <button className="sideBar__logout-button" type="text">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
