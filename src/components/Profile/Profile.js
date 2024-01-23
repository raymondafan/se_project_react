import React from "react";
import SideBar from "./SideBar";
import "./Profile.css";
import ClothesSection from "./ClothesSection";
const Profile = ({clothingItems, onSelectCard, onCreateModal}) => {
  
    return (
    
    <div className="profile">
      <div className="profile__sideBar"><SideBar/></div>
      <div className="profile__items"><ClothesSection clothingItems={clothingItems} onSelectCard={onSelectCard} onCreateModal={onCreateModal}/></div>
    </div>
  
  );
};
export default Profile;
