// import {closePopupClickEscape, closePopupClickOutside } from './index'
import { cardsContainer,
    formInputTypeTown,
    formInputTypeTownLink, 
    formAddElement,
    popupAddElement,
    formInputTypeFirstname,
    profilTitleFirstname,
    formInputTypeProfession,
    profilSubtitleProfession,
    popupEditProfile,
  } from './variables.js';
import { getElement } from './index.js';

export function openPopup(popup) {
  //open popup
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupClickEscape);
  document.addEventListener("click", closePopupClickOutside);
}

export function closePopup(popup) {
  //close popup
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupClickEscape);
  document.removeEventListener("click", closePopupClickOutside);
}

const popupClassOpened = "popup_opened";
const getActivePopup = () => document.querySelector(`.${popupClassOpened}`);

function closePopupClickEscape(event) {
  if (event.key === "Escape") {
    closePopup(getActivePopup());
  }
}

function closePopupClickOutside(event) {
  if (event.target.classList.contains(popupClassOpened)) {
    closePopup(getActivePopup());
  }
}

export function openformEditProfile() {
  //the data that will be displayed in the input field//<-------------Fixed a bug in the variable name (formEditProfileOpen --> openformEditProfile)
  formInputTypeFirstname.value = profilTitleFirstname.textContent;
  formInputTypeProfession.value = profilSubtitleProfession.textContent;
  openPopup(popupEditProfile);
}

export function closeFormEditProfile(event) {
  //data that will be sent after
  event.preventDefault(); //Canceling the default browser action
  profilTitleFirstname.textContent = formInputTypeFirstname.value;
  profilSubtitleProfession.textContent = formInputTypeProfession.value;
  closePopup(popupEditProfile);
}

export function openformAddElements(event) {
  event.preventDefault(); //Canceling the default browser action
  cardsContainer.prepend(
    //insert nodes or rows at the beginning//<---------------------------------Fixed a bug in the variable name (elements --> cardsContainer)
    getElement(formInputTypeTown.value, formInputTypeTownLink.value) //search method
  );

  formAddElement.reset(); //<------------------------------------------------------------------------Fixed a bug in the variable name (formAddElements --> formAddElement)
  closePopup(popupAddElement); //<-------------------------------------------------------------------Fixed a bug in the variable name (popupAddElements --> popupAddElement)
}
