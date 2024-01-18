import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const [link, setUrl] = useState("");
  const [tempState, setTempState] = useState("false");
  
   
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value); 
  }; //  will trigger on every single key press
  // onChange of the input, the handleNameChange() function is fired off which
  // passes the event which takes==> (e.target.value)
  // and setting the name => setName(e.target.value)
  //  which then updates name then updates the value
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    console.log(e.target.value);
  }; 
  const handleTempSate = (e) => {
    setTempState(e.target.value);
    console.log(e.target.value);
  }; 
 

  const handleSubmit=(e)=>{
    e.preventDefault();
    onAddItem({name, link, tempState})
  }
  return (
    <ModalWithForm
      onClose={handleCloseModal}
      onSubmit={handleSubmit} 
      //onSubmit calls function which calls anon fxn
      //which takes onAddItem which passes {name} from AddItemModal
      //to onAddItem which is gonna populate data in colsole.log
      isOpen={isOpen}
      title="New Garment"
      buttonText="Add garment"
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          minLength="1"
          maxLength="30"
        />
      </label>
      <label className="modal__label">
        Image
        <input
          className="modal__input"
          type="url"
          placeholder="image URL"
          onChange={handleUrlChange}
          value={link}
          name="link"
          minLength="1"
          maxLength="30"
        />
      </label>

      <p className="modal__radio-title">Select the weather type:</p>
      <div className="modal__radio-input">
        <div className="modal__radio-input-hot">
          <input name="radio" type="radio" id="hot" value="hot" checked={tempState==="hot"} onChange={handleTempSate}/>
          <label>Hot</label>
        </div>
        <div className="modal__radio-input-warm">
          <input name="radio" type="radio" id="warm" value="warm" checked={tempState==="warm"} onChange={handleTempSate}/>
          <label>Warm</label>
        </div>
        <div className="modal__radio-input-cold">
          <input name="radio" type="radio" id="cold" value="cold" checked={tempState==="cold"} onChange={handleTempSate}/>
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
