import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  currentUser,
  onEditProfile
}) => {
  return (
    <div className="profile">
      <div className="profile__sideBar">
        <SideBar currentUserSideBar={currentUser}  onEditProfile={onEditProfile}/>
      </div>

      <div className="profile__items">
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          currentUserClothesSection={currentUser}
        />
      </div>
    </div>
  );
};
export default Profile;
