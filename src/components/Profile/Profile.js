import React from "react";
import SideBar from "./SideBar";
import "./Profile.css";
import ClothesSection from "./ClothesSection";
const Profile = ({clothingItems, onSelectCard}) => {
  
    return (
        
    <div className="profile">
      <div className=""><SideBar/></div>
      <div className=""><ClothesSection clothingItems={clothingItems} onSelectCard={onSelectCard}/></div>
    </div>
   
  );
};
export default Profile;
