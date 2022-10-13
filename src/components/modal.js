'use strict';

import { errorPopup, errorTextElement, buttonElement, overviewImage, overviewCaption, popupOverview,} from "./variables.js"; 

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
  popup.addEventListener('mousedown', (evtent) => {
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

// let affirmed = undefined;
// const formConfirm = document.forms.confirm;
// const confirmPopup = document.querySelector('.popup_confirm');

// function makeConfirmed() {
//     if (affirmed && typeof(affirmed) == 'function') affirmed();
// }

// formConfirm.addEventListener('submit', makeConfirmed);

// export const showConfirmPopup = (after) => {
//   affirmed = after;
//     openPopup(confirmPopup);
// }

// export const closeConfirmPopup = () => {
//     closePopup(confirmPopup);
// }


export function showImage(event) {
  const image = event.target;
  overviewImage.setAttribute("src", image.src);
  overviewImage.setAttribute("alt", image.alt);
  overviewCaption.textContent = image.alt;

  openPopup(popupOverview);
}


