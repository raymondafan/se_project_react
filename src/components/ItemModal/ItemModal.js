import "./ItemModal.css";
const ItemModal = ({ selectedCard, onClose, onCardDelete, currentUser }) => {
  // console.log("item modal");

  // const currentUser = useContext(CurrentUserContext);
  // Checking if the current user is the owner of the current clothing item
  const isOwn = selectedCard.owner._id === currentUser._id;
  console.log(currentUser);
  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;
  console.log(isOwn);
  return (
    <div className={`modal`}>
      <div className="modal__image-container">
        <img className="modal__image" src={selectedCard.imageUrl} />
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
