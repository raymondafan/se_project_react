import "./ItemCard.css"
const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card__container">
        <img
          src={item.link}
          className="card_image"
          onClick={() => onSelectCard(item)}
        />
             <div className="card_name"> {item.name}</div>
      </div>
 
    </div>
  );
};
export default ItemCard;
