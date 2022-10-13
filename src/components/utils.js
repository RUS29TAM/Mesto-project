'use strict';

import { closePopup } from './modal.js';

export const buttonTypeCloseList = document.querySelectorAll('.button_type_close');

buttonTypeCloseList.forEach((buttonTypeCloseList) => {
  const popup = buttonTypeCloseList.closest('.popup');
  buttonTypeCloseList.addEventListener('click', () => closePopup(popup));
});

export function setBtnText(button,text){
  button.textContent = text;
}