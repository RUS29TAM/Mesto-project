"use strict";

enableValidation({
  formSelector: ".popup__box",
  inputSelector: ".form__input",
  submitButtonSelector: ".button_type_save",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "form__input-error",
  errorClass: "form__input-error_active",
});

export function enableValidation(object) {
const showInputError = (formElement, inputElement, errorMessage) => {
const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.add(object.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(object.errorClass);
  };

const hideInputError = (formElement, inputElement) => {
const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    inputElement.classList.remove(object.inputErrorClass);
    errorElement.classList.remove(object.errorClass);
    errorElement.textContent = "";
  };

const checkInputValidity = (formElement, inputElement) => {
        if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    }   else {
        inputElement.setCustomValidity("");
    }
        if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }   else {
        hideInputError(formElement, inputElement);
    }
  };

const setEventListeners = (formElement) => {
const inputList = Array.from(
      formElement.querySelectorAll(object.inputSelector)
    );
const buttonElement = formElement.querySelector(object.submitButtonSelector);
    
toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
    
        inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };

const formList = Array.from(document.querySelectorAll(object.formSelector));
    formList.forEach((formElement) => {
    
        formElement.addEventListener("submit", function (event) {
        event.preventDefault();
    });
        setEventListeners(formElement);
  });

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {    
    buttonElement.classList.add(object.inactiveButtonClass);
    buttonElement.disabled = true; 
    hasInvalidInput(inputList);    
    } else {
    buttonElement.classList.remove(object.inactiveButtonClass);
    buttonElement.disabled = false;
    }
  }
}





