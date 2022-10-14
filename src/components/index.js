"use strict";

import "../../src/index.css";
import * as api from "./api";
import * as profile from "./profile.js";
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
  buttonElement,
  submitCardBtn,
  submitAvatarBtn,
} from "./variables.js";
import { enableValidation, renderBtnInactive } from "./validate.js";
import { renderElements, createCard } from "./card.js";
import { openPopup, closePopup, popupError } from "./modal.js";
import * as utils from "./utils.js";

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([profileData, cardsData]) => {
    profile.setProfile(profileData);
    profile.renderProfile();
    renderElements(cardsData);
  })
  .catch((error) => popupError(error));

export function setProfile(profile) {
  currentVisitor = { ...profile };
}

enableValidation(validationConfig);

export function getProfileSettings() {
  return {
    name: profilTitleFirstname.textContent,
    about: profilSubtitleProfession.textContent,
  };
}

function openformEditProfile() {
  const profile = getProfileSettings();
  formInputTypeFirstname.value = profile["name"];
  formInputTypeProfession.value = profile["about"];

  openPopup(popupEditProfile);
}

function submitProfileForm(event) {
  event.preventDefault();
  const name = formInputTypeFirstname.value;
  const about = formInputTypeProfession.value;
  utils.setBtnText(buttonElement, "Идет сохранение...");
  api
    .updateProfile(name, about)
    .then((updateProfileInfo) => {
      utils.setBtnText(buttonElement, "Успешно");
      setTimeout(() => {
        event.target.reset();
        profile.setProfile(updateProfileInfo);
        closePopup(popupEditProfile);
      }, 500);
    })
    .catch((error) => console.log(error))
    .finally(() => {
      setTimeout(() => utils.setBtnText(buttonElement, "Сохранить"), 500);
    });
}

function createСard(event) {
  event.preventDefault();
  const name = formInputTypeTown.value;
  const link = formInputTypeTownLink.value;
  utils.setBtnText(submitCardBtn, "Идет сохранение");

  api
    .addCard(name, link)
    .then((createdCardInfo) => {
      utils.setBtnText(submitCardBtn, "Успешно");
      setTimeout(() => {
        event.target.reset();
        cardsContainer.prepend(createCard(createdCardInfo));
        closePopup(popupAddCard);
      }, 500);
    })
    .catch((error) => popupError(error))
    .finally(() => {
      setTimeout(() => utils.setBtnText(submitCardBtn, "Сохранить"), 500);
    });
}

function openformEditAvatar() {
  openPopup(popupEditAvatar);
  renderBtnInactive(popupEditAvatar, validationConfig);
}
function submitFormEditAvatar(event) {
  event.preventDefault();
  closePopup(popupEditAvatar);
  avatarImage.setAttribute("src", avatarLink.value);

  utils.setBtnText(submitAvatarBtn, "Идет сохранение...");
  api
    .updateAvatar(avatarLink.value)
    .then((updateProfile) => {
      utils.setBtnText(submitAvatarBtn, "Успешно");
      setTimeout(() => {
        event.target.reset();
        profile.setProfile(updateProfile);
        avatarImage.setAttribute("src", updateProfile.avatar);
        formInputTypeAvatar.value = "";
      }, 500);
    })
    .catch((error) => popupError(error))
    .finally(() => {
      setTimeout(() => utils.setBtnText(submitAvatarBtn, "Сохранить"), 500);
    });
}

function openformAddCard() {
  openPopup(popupAddCard);
  renderBtnInactive(popupAddCard, validationConfig);
}

buttonTypeEdit.addEventListener("click", openformEditProfile);
formEditProfile.addEventListener("submit", submitProfileForm);
buttonTypeAdd.addEventListener("click", () => openformAddCard());
formAddCard.addEventListener("submit", createСard);
buttonTypeAvatar.addEventListener("click", openformEditAvatar);
formEditAvatar.addEventListener("submit", submitFormEditAvatar);
