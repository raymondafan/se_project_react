import React, { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({
  isOpen,
  onClose,
  activeModal,
  onSaveButtonClick,
  currentUser,
}) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [isOpen, currentUser]);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveButtonClick({ name, avatar });
  };

  return (
    <ModalWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      name="edit"
      title="Change Profile Data"
      buttonText="Save Changes"
      isOpen={isOpen}
      activeModal={activeModal}
      onSaveButtonClick={onSaveButtonClick}
    >
      <label className="modal__label">
        Name*
        <input
          className="modal__input"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleName}
        />
      </label>

      <label className="modal__bottomlabel">
        Avatar
        <input
          className="modal__input"
          type="url"
          placeholder="Avatar"
          name="Avatar"
          value={avatar}
          onChange={handleAvatar}
        />
      </label>
    </ModalWithForm>
  );
};
export default EditProfileModal;
