import "./ItemCard.css";
const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card__container">
        <img
          src={item.imageUrl}
          className="card_image"
          onClick={() => onSelectCard(item)}
        />
        <div className="card__info">
          <div className="card_name"> {item.name}</div>
          <div>
            <button
              className="card__like-button card__like-button_active"
              type="button"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
