import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
const Profile = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  currentUser,
}) => {
  return (
    <div className="profile">
      <div className="profile__sideBar">
        <SideBar currentUserSideBar={currentUser} />
  
      
      <EditProfileModal/>
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
