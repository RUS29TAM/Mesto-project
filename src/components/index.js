"use strict";

import "../../src/index.css";
import './api.js';
import {
  formEditProfile,
  buttonTypeEdit,
  popupAddCard,
  buttonTypeAdd,
  formAddCard,
  buttonTypeAvatar,
  formEditAvatar,
  overviewImage,
  overviewCaption,
  popupOverview,
  cardsContainer,
  formInputTypeTown,
  formInputTypeTownLink,
  formInputTypeFirstname,
  profilTitleFirstname,
  formInputTypeProfession,
  profilSubtitleProfession,
  popupEditProfile,
  popupEditAvatar,
  avatarLink,
  avatarImage,
  validationConfig,
  formInputTypeAvatar,
} from "./variables.js";
import { enableValidation, renderBtnInactive, } from "./validate.js";
import { getElement } from "./card.js";
import { openPopup, closePopup } from "./modal.js";
import "./utils.js";

enableValidation(validationConfig);

function openformEditProfile() {
  formInputTypeFirstname.value = profilTitleFirstname.textContent;
  formInputTypeProfession.value = profilSubtitleProfession.textContent;
  openPopup(popupEditProfile);  
}

function closeFormEditProfile(event) {
  event.preventDefault();
  profilTitleFirstname.textContent = formInputTypeFirstname.value;
  profilSubtitleProfession.textContent = formInputTypeProfession.value;
  closePopup(popupEditProfile);
}

function createСard(event) {
  event.preventDefault();
  cardsContainer.prepend(
    getElement(formInputTypeTown.value, formInputTypeTownLink.value)
  );
  formAddCard.reset();
  closePopup(popupAddCard); 
}

function openformEditAvatar() {
  openPopup(popupEditAvatar);
  renderBtnInactive(popupEditAvatar, validationConfig); 
}
function closeFormEditAvatar(evt) {
  evt.preventDefault();
  closePopup(popupEditAvatar);
  avatarImage.setAttribute("src", avatarLink.value);
  formInputTypeAvatar.value = "";
}

export function showImage(event) {
  const image = event.target;
  overviewImage.setAttribute("src", image.src);
  overviewImage.setAttribute("alt", image.alt);
  overviewCaption.textContent = image.alt;

  openPopup(popupOverview);
}

function openformAddCard() {
  openPopup(popupAddCard);
  renderBtnInactive(popupAddCard, validationConfig); 
}


buttonTypeEdit.addEventListener("click", openformEditProfile);
formEditProfile.addEventListener("submit", closeFormEditProfile);
buttonTypeAdd.addEventListener("click", () => openformAddCard());
formAddCard.addEventListener("submit", createСard);
buttonTypeAvatar.addEventListener("click", openformEditAvatar);
formEditAvatar.addEventListener("submit", closeFormEditAvatar);
