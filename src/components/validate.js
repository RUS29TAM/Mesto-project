
"use strict";

export const submitButton = "button_type_save";
export const formElement = document.querySelector(".form");
export const formImput = formElement.querySelector(".form__input-error");
export const formError = formElement.querySelector(`.${formImput.id}-error`);

export const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

export const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

export const setEventListeners = (formElement) => {
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

export const enableValidation = () => {
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

export function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

export function toggleButtonState(inputList, buttonTypeSave) {
  if (hasInvalidInput(inputList)) {
    buttonTypeSave.classList.add("button_inactive");
    buttonTypeSave.setAttribute("disabled", true);
  } else {
    buttonTypeSave.classList.remove("button_inactive");
    buttonTypeSave.removeAttribute("disabled", true);
  }
}

export const isValid = (formElement, inputElement) => {
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