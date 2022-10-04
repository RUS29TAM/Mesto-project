'use strict';

import '../../src/index.css';
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
} from './variables.js';
import { enableValidation, disabledSubmitBtn } from './validate.js';
import { getElement } from './card.js';
import { openPopup, closePopup, } from './modal.js';
import './utils.js';

enableValidation({});

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

function openformEditAvatar() {
  avatarLink.value = avatarImage.getAttribute('src');
  openPopup(popupEditAvatar);
}
function closeFormEditAvatar(evt) {
  evt.preventDefault();
  closePopup(popupEditAvatar);
  avatarImage.setAttribute('src', avatarLink.value);
}

export function showImage(event) {
  const image = event.target;
  overviewImage.setAttribute('src', image.src);
  overviewImage.setAttribute('alt', image.alt);
  overviewCaption.textContent = image.alt;

  openPopup(popupOverview);
}

buttonTypeEdit.addEventListener('click', openformEditProfile);
formEditProfile.addEventListener('submit', closeFormEditProfile);
buttonTypeAdd.addEventListener('click', () => openPopup(popupAddCard));
formAddCard.addEventListener('submit', openformAddCards);
buttonTypeAvatar.addEventListener('click', openformEditAvatar);
formEditAvatar.addEventListener('submit', closeFormEditAvatar);
