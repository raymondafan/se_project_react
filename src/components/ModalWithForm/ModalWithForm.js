import "./ModalWithForm.css";
const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
  activeModal,
  onSecondButtonClick,
}) => {
  function getSecondButtonText() {
    if (activeModal === "signup") {
      return "or Login";
    }
    if (activeModal === "login") {
      return "or Register";
    }
  }
  // console.log("ModalWithForm");
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__form-container">
        <button
          className="modal__close-grey"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form onSubmit={onSubmit}>
          {children}
          <div className="modal__button-container">
            <button className="modal__button" type="submit">
              {buttonText}
            </button>
            {(activeModal === "signup" || activeModal === "login") && (
              <button
                type="button"
                className="modal__button-register"
                onClick={onSecondButtonClick}
              >
                {getSecondButtonText()}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default ModalWithForm;
