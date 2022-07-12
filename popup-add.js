//  Переменные - BUTTON PROFILE-ADD
const buttonTypeAdd = document.querySelector(".button_type_add");
const buttonTypeSubmit = document.querySelector(".button_type_submit");

//-----------------------------------------------------------------------------Слушатели события - закрытие popup
function closePopup(event) {
  const popup = event.target.closest(".popup");
  popup && popup.classList.remove("popup_opened");
}

buttonTypeClose = document.querySelectorAll(".button_type_close");
buttonTypeClose.forEach((buttonTypeClose) =>
  buttonTypeClose.addEventListener("click", closePopup)
);

//-----------------------------------------------------------------------------ПЕРЕМЕННЫЕ
// Переменные - POPUP
const popupAddElements = document.querySelector(".popup_add-elements");

// Переменные - FORM PROFILE-ADD
const formAddElements = document.querySelector("form_add-elements");
const formInputTypeTown = document.querySelector(".form__input_type_town");
const formInputTypeTownLink = document.querySelector(
  ".form__input_type_town-link"
);

// Переменные - ELEMENTS (TOWN)
const elementsFoto = document.querySelector(".elements__foto");
const elementsTitle = document.querySelector(".elements__title");

//-----------------------------------------------------------------------------FUNCTIONS

//Открыть форму
function openAddForm() {
  popupAddElements.classList.add("popup_opened");
}

//Ввод
function setElements(elementsInfo) {
  elementsFoto.textContent = elementsInfo.town;
  elementsTitle.textContent = elementsInfo.townLink;
}

//Сохранить данные формы
function AddElements(evt) {
  evt.preventDefault();

  let elementsInfo = {
    town: formInputTypeTown.value,
    townLink: formInputTypeTownLink.value,
  };

  formInputTypeTown.value = "";
  formInputTypeTownLink.value = "";

  setElements(elementsInfo);
  closeAddForm();
}

//-----------------------------------------------------------------------------Обработчики
buttonTypeAdd.addEventListener("click", openAddForm);
buttonTypeClose.addEventListener("click", closeAddForm);
buttonTypeSubmit.addEventListener("click", AddElements);

//console.log()
