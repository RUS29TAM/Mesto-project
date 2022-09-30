"use strict";

import "../../src/index.css";
import {
  formEditProfile,
  buttonTypeEdit,
  popupAddElement,
  buttonTypeAdd,
  formAddElement,
} from "./variables.js";
import "./card.js"; 
import './validate.js';
import {
  openPopup,
  openformEditProfile,
  closeFormEditProfile,
  openformAddElements,
} from "./modal.js";
import "./utils.js";


// enableValidation();

//ADD LISTENER POPUP PROFILE-EDIT
buttonTypeEdit.addEventListener("click", openformEditProfile); //<-----------------------------------Fixed a bug in the variable name (formEditProfileOpen --> openformEditProfile)
formEditProfile.addEventListener("submit", closeFormEditProfile);

//ADD LISTENER FOR ADD ELEMENTS
buttonTypeAdd.addEventListener("click", () => openPopup(popupAddElement)); //<-----------------------Fixed a bug in the variable name (popupAddElements --> popupAddElement)
formAddElement.addEventListener("submit", openformAddElements); //<----------------------------------Fixed a bug in the variable name (formAddElements --> formAddElement)
