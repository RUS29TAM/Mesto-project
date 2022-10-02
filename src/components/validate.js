"use strict";

export default class FormValidator {
  constructor(data, formElement) {
    this.formSelector = data.formSelector;
    this.inputSelector = data.inputSelector;
    this.submitButtonSelector = data.submitButtonSelector;
    this.inactiveButtonClass = data.inactiveButtonClass;
    this.inputErrorClass = data.inputErrorClass;
    this.errorClass = data.errorClass;
    this.formElement = formElement;
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.inputSelector)
    );
    this.buttonElement = this.formElement.querySelector(
      this.submitButtonSelector
    );
  }

  showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.errorClass);
  }

  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this.errorClass);
  }

  setEventListeners() {
    this.toggleButtonState();

    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.isValid(inputElement);
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this.formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this.setEventListeners();
  }

  hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    if (this.hasInvalidInput()) {
      this.buttonElement.setAttribute("disabled", true);
      this.buttonElement.classList.add(this.inactiveButtonClass);
    } else {
      this.buttonElement.removeAttribute("disabled");
      this.buttonElement.classList.remove(this.inactiveButtonClass);
    }
  }

  isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
    if (inputElement.validity.patternMismatch) {
      this.showInputError(inputElement, inputElement.dataset.errorMessage);
    }
  }

  hideErrors() {
    this.inputList.forEach((input) => {
      this.hideInputError(input);
    });
  }
}
