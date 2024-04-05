import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
const ClothesSection = ({
  clothingItems,
  onSelectCard,
  onCreateModal,
  clothingItemsCurrentUser,
  selectedCard
}) => {
debugger;
const selectedClothingItems= clothingItems.map(obj=>obj.owner._id)

  const isOwn = selectedClothingItems === clothingItemsCurrentUser._id;
  console.log(clothingItemsCurrentUser);
  // Creating a variable which you'll then set in `className` for the delete button
  const clothingItemsCurrentUserClassName = `clothes__section-items ${
    isOwn ? "clothes__section-items_visible" : "clothes__section-items_hidden"
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
