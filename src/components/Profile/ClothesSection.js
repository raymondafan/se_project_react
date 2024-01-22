import ItemCard from "../ItemCard/ItemCard";
const ClothesSection = ({ clothingItems, onSelectCard, onCreateModal }) => {
  return (
    <div>
      <div>Your Items</div>
      <div>
        <button className="header__button" type="text" onClick={onCreateModal}>
          + Add New
        </button>
      </div>
      <div className="card_items">
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
    </div>
  );
};
export default ClothesSection;
