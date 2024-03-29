import "./ItemModal.css";
const ItemModal = ({ selectedCard, onClose, onCardDelete }) => {
  // console.log("item modal");

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
          <button onClick={
            ()=>{
              onCardDelete(selectedCard)
            }
          } className="modal__item-delete">
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;
