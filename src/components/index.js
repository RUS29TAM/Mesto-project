"use strict";

import '../../src/index.css';
import {  
  formEditProfile, 
  buttonTypeEdit,
  popupAddElement, 
  buttonTypeAdd,
  formAddElement,
  popupOverview,
  overviewImage,
  overviewCaption,
  templateElement,
  cardsContainer,
  buttonTypeAvatar,
  popupEditAvatar,
  formEditAvatar,

 } from './variables.js';

 import { openPopup, 
  closePopup,
  openformEditProfile,
  closeFormEditProfile,
  openformAddElements,
 } from './modal.js';
const elementsElement = [
  {
    name: "Собакен", //town reneme --> name //townlink reneme --> link
    link: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Человекен", //town reneme --> name //townlink reneme --> link
    link: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Джо", //town reneme --> name //townlink reneme --> link
    link: "https://c.tenor.com/psoPTJCAoJYAAAAC/joey-tribbiani-brain.gif",
  },
  {
    name: "Байкер", //town reneme --> name //townlink reneme --> link
    link: "https://images.unsplash.com/photo-1658064273986-844330ff8870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    name: "Яндекс беспилотники", //town reneme --> name //townlink reneme --> link
    link: "https://images.unsplash.com/photo-1625924305476-d8f96c560c21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "LFCSFS:FVCS:NCSN:VCENsv;rb", //town reneme --> name //townlink reneme --> link
    link: "https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
];



//ADD LISTENER FOR CLOSE POPUP
const buttonTypeCloseList = document.querySelectorAll(".button_type_close"); //<---------------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
buttonTypeCloseList.forEach((buttonTypeCloseList) => {
  //close on all cross button//<----------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
  const popup = buttonTypeCloseList.closest(".popup"); //<-------------------------------------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
  buttonTypeCloseList.addEventListener("click", () => closePopup(popup)); //<------------------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
});

//ADD LISTENER POPUP PROFILE-EDIT
buttonTypeEdit.addEventListener("click", openformEditProfile); //<-----------------------------------Fixed a bug in the variable name (formEditProfileOpen --> openformEditProfile)
formEditProfile.addEventListener("submit", closeFormEditProfile);

//ADD LISTENER FOR ADD ELEMENTS
buttonTypeAdd.addEventListener("click", () => openPopup(popupAddElement)); //<-----------------------Fixed a bug in the variable name (popupAddElements --> popupAddElement)
formAddElement.addEventListener("submit", openformAddElements); //<----------------------------------Fixed a bug in the variable name (formAddElements --> formAddElement)


//_____________________________________________________________________________BUTTON LIKE ON ELEMENTS
function toggleLikeElement(event) {
  event.target.classList.toggle("button_type_like_on");
}

//_____________________________________________________________________________RENDERING ELEMENTS
function deleteElement(evtent) {
  const elementsElement = evtent.target.closest(".elements__element");
  elementsElement.remove();
}

export function getElement(name, link) {
  //search method //town reneme --> name //townlink reneme --> link
  const template =
    templateElement.content.cloneNode(
      true
    ); /*The cloneNode method allows you to clone an element and get an exact copy of it.
  This copy can then be inserted into the page using the methods prepend, append, appendChild, insertBefore or insertAdjacentElement.
   In the parameter, the method gets true or false. If true is passed, the element is cloned completely, 
   along with all attributes and child elements, and if false, only the element itself (without child elements).*/
  const img = template.querySelector(".elements__foto");
  img.setAttribute("alt", name); //town reneme --> name
  img.setAttribute("src", link); //townlink reneme --> link
  img.addEventListener("click", overview);
  const titleFoto = template.querySelector(".elements__title"); //<----------------------------------Fixed a bug in the variable name (h2 --> TitleFoto)
  titleFoto.textContent = name; //<------------------------------------------------------------------Fixed a bug in the variable name (h2 --> TitleFoto) //town reneme --> name
  const buttonTypeLike = template.querySelector(".button_type_like");

  buttonTypeLike.addEventListener("click", toggleLikeElement);
  const buttonTypeDeleteElement = template.querySelector(
    ".button_type_delete-element"
  );

  buttonTypeDeleteElement.addEventListener("click", deleteElement); //delete button on the image

  return template;
}

 function renderElements() {
  // elements.innerHTML = ""; //The innerHTML property allows you to get the HTML content of an element as a string.
  elementsElement.forEach(
    (
      element //Iterating through the array
    ) =>
      cardsContainer.append(
        getElement(element.name, element.link)
      ) /*method inserts a set of Node objects or string objects after the last child of the Element. 
String objects are inserted as equivalent Text nodes.*/ //<----------------Fixed a bug in the variable name (elements --> cardsContainer)//town reneme --> name //townlink reneme --> link
  );
}

renderElements();

//_____________________________________________________________________________FUNCTIONS FOR POPUP OVERVIEW
function overview(event) {
  const image = event.target;
  overviewImage.setAttribute("src", image.src);
  overviewImage.setAttribute("alt", image.alt);
  overviewCaption.textContent = image.alt;

  openPopup(popupOverview);
}

// //_____________________________________________________________________________ OPEN POPUP EDIT AVATAR
// const buttonTypeAvatar = document.querySelector(".button_type_avatar");
// const popupEditAvatar = document.querySelector(".popup_edit-avatar");
// const formEditAvatar = document.querySelector(".form_edit-avatar");

buttonTypeAvatar.addEventListener("click", openformEditAvatar);
formEditAvatar.addEventListener("submit", closeFormEditAvatar);

function openformEditAvatar() {
  openPopup(popupEditAvatar);
}

function closeFormEditAvatar(event) {
  event.preventDefault();
  //   something.textContent = formInputTypeSomething.value;
  closePopup(popupEditAvatar);
}


//_____________________________________________________________________________ VALIDATION 


const submitButton = "button_type_save";
const formElement = document.querySelector(".form");
const formImput = formElement.querySelector(".form__input-error");
const formError = formElement.querySelector(`.${formImput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonTypeSave = formElement.querySelector(`.${submitButton}`);
  toggleButtonState(inputList, buttonTypeSave);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonTypeSave);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__box"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evtent) {
      evtent.preventDefault();
    });
    const fieldsetList = Array.from(formElement.querySelectorAll(".form"));
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

enableValidation();

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonTypeSave) {
  if (hasInvalidInput(inputList)) {
    buttonTypeSave.classList.add("button_inactive");
    buttonTypeSave.setAttribute("disabled", true);
  } else {
    buttonTypeSave.classList.remove("button_inactive");
    buttonTypeSave.removeAttribute("disabled", true);
  }
}

const isValid = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
