"use strict";

import "../../src/index.css";
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
} from "./variables.js";
import { enableValidation, disabledSubmitBtn } from "./validate.js";
import { getElement } from "./card.js";
import { openPopup, closePopup } from "./modal.js";
import "./utils.js";

enableValidation({});

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
}
function closeFormEditAvatar(evt) {
  evt.preventDefault();
  closePopup(popupEditAvatar);
  avatarImage.setAttribute("src", avatarLink.value);
}

export function showImage(event) {
  const image = event.target;
  overviewImage.setAttribute("src", image.src);
  overviewImage.setAttribute("alt", image.alt);
  overviewCaption.textContent = image.alt;

  openPopup(popupOverview);
}

buttonTypeEdit.addEventListener("click", openformEditProfile);
formEditProfile.addEventListener("submit", closeFormEditProfile);
buttonTypeAdd.addEventListener("click", () => openPopup(popupAddCard));
formAddCard.addEventListener("submit", createСard);
buttonTypeAvatar.addEventListener("click", openformEditAvatar);
formEditAvatar.addEventListener("submit", closeFormEditAvatar);
