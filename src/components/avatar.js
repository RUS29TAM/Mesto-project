"use strict";

import {
  popupEditAvatar,
  formEditAvatar,
  buttonTypeAvatar,
} from "./variables.js";
import { openPopup, closePopup } from "./modal.js";

// console.log("1234567890-----------!!!!!!!!!!!!------------0987654321");

function openformEditAvatar() {
  openPopup(popupEditAvatar);
}

function closeFormEditAvatar(event) {
  event.preventDefault();

  closePopup(popupEditAvatar);
}

buttonTypeAvatar.addEventListener("click", openformEditAvatar);
formEditAvatar.addEventListener("submit", closeFormEditAvatar);
