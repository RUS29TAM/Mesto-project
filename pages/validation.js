"use strict";

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
