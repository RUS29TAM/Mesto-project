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
  rowSelectors,
} from "./variables.js";
import  FormValidator from "./validate.js";
import { getElement } from "./card.js";
import { openPopup, closePopup } from "./modal.js";
import "./utils.js";

import './avatar.js';

const popups = [...document.querySelectorAll(".popup")];
popups.forEach((popup) =>
  popup.addEventListener("click", (evtent) => {
    if (evtent.target.classList.contains("popup")) {
      closePopup(popup);
    }
  })
);

function openformEditProfile() {
  //the data that will be displayed in the input field
  formInputTypeFirstname.value = profilTitleFirstname.textContent;
  formInputTypeProfession.value = profilSubtitleProfession.textContent;
  openPopup(popupEditProfile);
}

function closeFormEditProfile(event) {
  //data that will be sent after
  event.preventDefault(); //Canceling the default browser action
  profilTitleFirstname.textContent = formInputTypeFirstname.value;
  profilSubtitleProfession.textContent = formInputTypeProfession.value;
  closePopup(popupEditProfile);
}

function openformAddCards(event) {
  event.preventDefault(); //Canceling the default browser action
  cardsContainer.prepend(
    //insert nodes or rows at the beginning
    getElement(formInputTypeTown.value, formInputTypeTownLink.value) //search method
  );

  formAddCard.reset();
  closePopup(popupAddCard);
}

// export function openformEditAvatar() {
//   openPopup(popupEditAvatar);
// }

// export function closeFormEditAvatar(event) {
//   event.preventDefault();
//   closePopup(popupEditAvatar);
// }

export function showImage(event) {
  const image = event.target;
  overviewImage.setAttribute("src", image.src);
  overviewImage.setAttribute("alt", image.alt);
  overviewCaption.textContent = image.alt;

  openPopup(popupOverview);
}


const popupEditProfileValid = new FormValidator(rowSelectors, popupEditProfile);
popupEditProfileValid.enableValidation();
const popupAddCardValid = new FormValidator(rowSelectors, popupAddCard);
popupAddCardValid.enableValidation();
const popupAddAvatarValid = new FormValidator(rowSelectors, popupEditAvatar);
popupAddAvatarValid.enableValidation();

buttonTypeEdit.addEventListener("click", openformEditProfile);
formEditProfile.addEventListener("submit", closeFormEditProfile);
buttonTypeAdd.addEventListener("click", () => openPopup(popupAddCard));
formAddCard.addEventListener("submit", openformAddCards);
// buttonTypeAvatar.addEventListener("click", openformEditAvatar);
// formEditAvatar.addEventListener("submit", closeFormEditAvatar);