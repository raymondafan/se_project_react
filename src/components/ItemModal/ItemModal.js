import "./ItemModal.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
const ItemModal = ({ selectedCard, onClose, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = selectedCard.owner === currentUser._id;
  console.log(currentUser);
  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;
  console.log(isOwn);
  return (
    <div className={`modal`}>
      <div className="modal__image-container">
        <img className="modal__image" alt="modal" src={selectedCard.imageUrl} />
        <button
          className="modal__close-white"
          type="button"
          onClick={onClose}
        ></button>
        <div className="modal__description">
          <div>{selectedCard.name}</div>
          <div>Weather Type: {selectedCard.weather}</div>
          <button
            onClick={() => {
              onCardDelete(selectedCard);
            }}
            className={itemDeleteButtonClassName}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;
