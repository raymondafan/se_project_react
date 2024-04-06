import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
const ClothesSection = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  currentUserClothesSection,
}) => {
  const ownedItems = clothingItems.map((item) => {
    return item.owner._id === currentUserClothesSection._id;
  });

 
  console.log(currentUserClothesSection);
  // Creating a variable which you'll then set in `className` for the delete button
  const clothingItemsCurrentUserClassName = `clothes__section-items ${
    ownedItems ? "clothes__section-items_visible" : "clothes__section-items_hidden"
  }`;
  return (
    <section className="clothes__section">
      <div className="clothes__section-wrapper">
        <p className="clothes__section-title">Your Items</p>

        <button
          className="clothes__section-button"
          type="text"
          onClick={onCreateModal}
        >
          + Add New
        </button>
      </div>
      <div className={clothingItemsCurrentUserClassName}>
        {clothingItems.map((data) => {
          return (
            <ItemCard key={data._id} item={data} onSelectCard={onSelectCard} />
          );
        })}
      </div>
    </section>
  );
};
export default ClothesSection;
