"use strict";

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupClickEscape);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupClickEscape);
}

const popupClassOpened = "popup_opened";
const getActivePopup = () => document.querySelector(`.${popupClassOpened}`);

function closePopupClickEscape(event) {
  if (event.key === "Escape") {
    closePopup(getActivePopup());
  }
}
