"use strict";

import "../../src/index.css";
import * as api from './api';
import * as profile from './profile.js'
import {
  formEditProfile,
  buttonTypeEdit,
  popupAddCard,
  buttonTypeAdd,
  formAddCard,
  buttonTypeAvatar,
  formEditAvatar,
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
import { renderElements, createCard } from "./card.js";
import { openPopup, closePopup, popupError } from "./modal.js";
import "./utils.js";

Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([profileData, cardsData]) => {
      profile.setProfile(profileData);
      profile.renderProfile();
        renderElements(cardsData);        
    })
    .catch(error =>  popupError(error));   /*    console.log(error),    */

    export function setProfile(profile) {
      currentVisitor = {...profile};
  }

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
  api.addCard(formInputTypeTown.value, formInputTypeTownLink.value).then(createdCardInfo => {
  cardsContainer.prepend(createCard(createdCardInfo))
  formAddCard.reset();
  closePopup(popupAddCard); 
  });
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
