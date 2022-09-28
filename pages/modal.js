
const popupClassOpened = 'popup_opened';
const getActivePopup = () => document.querySelector(`.${popupClassOpened}`);

function closePopupClickEscape(event) {
  if (event.key === 'Escape') {
      closePopup(getActivePopup());
  };
};

function closePopupClickOutside (event) {
  if (event.target.classList.contains(popupClassOpened)) {
      closePopup(getActivePopup());
  };
};