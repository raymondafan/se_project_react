import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
const Profile = ({ clothingItems, onSelectCard, onCreateModal, clothingItemsCurrentUser,  selectedCard }) => {
  return (
    <div className="profile">
      <div className="profile__sideBar">
        <SideBar />
      </div>
      <div className="profile__items">
        <ClothesSection
          clothingItems={clothingItems}
          onSelectCard={onSelectCard}
          onCreateModal={onCreateModal}
          clothingItemsCurrentUser={clothingItemsCurrentUser}
          selectedCard={selectedCard}

        />
      </div>
    </div>
  );
};
export default Profile;
