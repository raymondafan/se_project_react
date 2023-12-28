import "./ItemModal.css";
const ItemModal = ({ selectedCard, onClose }) => {
  console.log("item modal");

  return (
    <div className={`modal`}>
      <div className="modal__content">
        <img className="modal__image" src={selectedCard.link} />
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
        ></button>
        <div className="modal__description">
          <div>{selectedCard.name}</div>
          <div>Weather Type: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;
