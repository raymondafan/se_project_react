import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";
const ItemCard = ({ item, onSelectCard, onCardLike, isLoggedIn }) => {

  const [isLiked, setIsLiked] = useState(false);
  const { _id } = useContext(CurrentUserContext);
  console.log(isLiked);

  useEffect(() => {
    if (item.likes.includes(_id)) {
      setIsLiked(true);
    }
  }, [isLoggedIn]);

  function getLikeButtonClass() {
    if (isLiked) {
      return "card__like-button_active";
    }
    return "";
  }

  const handleLikeClick = () => {
    onCardLike({ id: item._id, isLiked })
      .then(() => {
        setIsLiked((prev) => !prev);
      })
      .catch((err) => console.log(err)); // Pass id and isLiked to onCardLike
  };
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
              className={`card__like-button ${getLikeButtonClass()}`}
              type="button"
              onClick={handleLikeClick}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
