"use strict";

import {openPopup, closePopup} from './index.js';

const buttonTypeAvatar = document.querySelector(".button_type_avatar");
const popupEditAvatar = document.querySelector(".popup_edit-avatar");
const formEditAvatar = document.querySelector(".form_edit-avatar");

buttonTypeAvatar.addEventListener("click", openformEditAvatar);
formEditAvatar.addEventListener("submit", closeFormEditAvatar);

function openformEditAvatar() {
  openPopup(popupEditAvatar);
}

function closeFormEditAvatar(event) {
  event.preventDefault();
  //   something.textContent = formInputTypeSomething.value;
  closePopup(popupEditAvatar);
}
