import "./SideBar.css";
const SideBar = ({ currentUserSideBar }) => {
  return (
    <div className="sideBar">
      <img
        className="sideBar__avatar"
        src={currentUserSideBar.avatar}
        alt="logo"
      />
      <div className="sideBar__user">{currentUserSideBar.name}</div>
    </div>
  );
};
export default SideBar;
