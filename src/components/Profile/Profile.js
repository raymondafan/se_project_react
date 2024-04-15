import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  currentUser,
  onEditProfile,
  onCardLike,
  isLoggedIn,
  onProfileLogout
}) => {
  return (
    <div className="profile">
      <div className="profile__sideBar">
        <SideBar currentUserSideBar={currentUser}  onEditProfile={onEditProfile} onProfileLogout={onProfileLogout} />
      </div>

      <div className="profile__items">
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          currentUserClothesSection={currentUser}
          onCardLike={onCardLike}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
};
export default Profile;
