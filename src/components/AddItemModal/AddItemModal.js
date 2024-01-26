import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";
const AddItemModal = ({ handleCloseModal, handleAddItemSubmit, isOpen }) => {
  const [name, setName] = useState("");
  const [imageUrl, setUrl] = useState("");
  const [weather, setWeather] = useState("false");
  
   
  const handleNameChange = (e) => {
    setName(e.target.value);

  }; //  will trigger on every single key press
  // onChange of the input, the handleNameChange() function is fired off which
  // passes the event which takes==> (e.target.value)
  // and setting the name => setName(e.target.value)
  //  which then updates name then updates the value
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
    // console.log(e.target.value);
  }; 
  const handleWeather = (e) => {
    setWeather(e.target.value);
    // console.log(e.target.value);
  }; 
 

  const handleSubmit=(e)=>{
    e.preventDefault();
    handleAddItemSubmit({name, imageUrl, weather})
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
          value={imageUrl}
          name="link"
          minLength="1"
          
        />
      </label>

      <p className="modal__radio-title">Select the weather type:</p>
      <div className="modal__radio-input">
        <div className="modal__radio-input-hot">
          <input name="radio" type="radio" id="hot" value="hot" checked={weather==="hot"} onChange={handleWeather}/>
          <label>Hot</label>
        </div>
        <div className="modal__radio-input-warm">
          <input name="radio" type="radio" id="warm" value="warm" checked={weather==="warm"} onChange={handleWeather}/>
          <label>Warm</label>
        </div>
        <div className="modal__radio-input-cold">
          <input name="radio" type="radio" id="cold" value="cold" checked={weather==="cold"} onChange={handleWeather}/>
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
