import { closePopup } from './modal.js';

export const buttonTypeCloseList = document.querySelectorAll(".button_type_close"); //<---------------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
buttonTypeCloseList.forEach((buttonTypeCloseList) => {
  //close on all cross button//<----------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
 const popup = buttonTypeCloseList.closest(".popup"); //<-------------------------------------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
  buttonTypeCloseList.addEventListener("click", () => closePopup(popup)); //<------------------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
});