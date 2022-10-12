'use strict';

import { errorPopup, errorTextElement, buttonElement, } from "./variables.js";

const popupClassOpened = 'popup_opened';
const getActivePopup = () => document.querySelector(`.${popupClassOpened}`);

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupClickEscape);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupClickEscape);
}

function closePopupClickEscape(event) {
  if (event.key === 'Escape') {
    closePopup(getActivePopup());
  }
}

const popups = [...document.querySelectorAll('.popup')];
popups.forEach((popup) =>
  popup.addEventListener('click', (evtent) => {
    if (evtent.target.classList.contains('popup')) {
      closePopup(popup);
    }
  })
);



export const popupError = (errorText) => {
    errorTextElement.textContent = errorText;
    openPopup(errorPopup);
}

buttonElement.addEventListener('click', () => {
    errorTextElement.textContent = '';
    closePopup(errorPopup);
});

let confirmedAction = undefined;
const formConfirm = document.forms.confirm;
const confirmPopup = document.querySelector('.popup_confirm');

function doConfirmedAction() {
    if (confirmedAction && typeof(confirmedAction) == 'function') confirmedAction();
}

formConfirm.addEventListener('submit', doConfirmedAction);

export const showConfirmActionPopup = (actionAfterConfirm) => {
    confirmedAction = actionAfterConfirm;
    openPopup(confirmPopup);
}

export const closeConfirmPopup = () => {
    closePopup(confirmPopup);
}

