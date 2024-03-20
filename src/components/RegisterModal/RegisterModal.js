import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";
const RegisterModal = ({ isOpen, onClose, handleRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ email, password, name, avatar });
  };
  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      name="signup"
      title="Register here"
      buttonText="Sign Up"
      isOpen={isOpen}
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
    </ModalWithForm>
  );
};
