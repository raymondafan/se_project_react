import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
const ClothesSection = ({ clothingItems, onSelectCard, onCreateModal }) => {
 
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
      <div className="clothes__section-items">
        {clothingItems.map((data) => {
          return (
            <ItemCard
              key={data.id || data._id}
              item={data}
              onSelectCard={onSelectCard}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ClothesSection;
