'use strict';
import { renderBtnInactive } from './validate.js';
const popupClassOpened = 'popup_opened';
const getActivePopup = () => document.querySelector(`.${popupClassOpened}`);

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupClickEscape);
  renderBtnInactive();
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