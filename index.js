"use strict";
//-----------------------------------------------------------------------------VARIABLES FOR POPUP PROFILE-EDIT
const popupEditProfile = document.querySelector(".popup_edit-profile");
const formEditProfile = document.querySelector(".form_edit-profile");
const formInputTypeFirstname = document.querySelector(
  ".form__input_type_firstname"
);
const formInputTypeProfession = document.querySelector(
  ".form__input_type_profession"
);
const profilTitleFirstname = document.querySelector(
  ".profile__title-firstname"
);
const profilSubtitleProfession = document.querySelector(
  ".profile__subtitle-profession"
);
const buttonTypeEdit = document.querySelector(".button_type_edit");
//-----------------------------------------------------------------------------FUNCTIONS FOR OPEN/CLOSE POPUP
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//ADD LISTENER FOR OPEN/CLOSE POPUP
const buttonTypeClose = document.querySelectorAll(".button_type_close");

buttonTypeClose.forEach((buttonTypeClose) => {
  const popup = buttonTypeClose.closest(".popup");
  buttonTypeClose.addEventListener("click", () => closePopup(popup));
});
//-----------------------------------------------------------------------------FUNCTIONS FOR POPUP PROFILE-EDIT
function formEditProfileOpen() {
  formInputTypeFirstname.value = profilTitleFirstname.textContent;
  formInputTypeProfession.value = profilSubtitleProfession.textContent;
  openPopup(popupEditProfile);
}

function closeFormEditProfile(event) {
  event.preventDefault();
  profilTitleFirstname.textContent = formInputTypeFirstname.value;
  profilSubtitleProfession.textContent = formInputTypeProfession.value;
  closePopup(popupEditProfile);
}
//ADD LISTENER POPUP PROFILE-EDIT
buttonTypeEdit.addEventListener("click", formEditProfileOpen);
formEditProfile.addEventListener("submit", closeFormEditProfile);
//-----------------------------------------------------------------------------VARIABLES FOR POPUP ADD
const popupAddElements = document.querySelector(".popup_add-elements");
const formInputTypeTown = document.querySelector(".form__input_type_town");
const formInputTypeTownLink = document.querySelector(
  ".form__input_type_townlink"
);
const elementsFoto = document.querySelector(".elements__foto");
const elementsTitle = document.querySelector(".elements__title");
const buttonTypeAdd = document.querySelector(".button_type_add");
const formAddElements = document.querySelector(".form_add-elements");
const buttonTypeSubmit = document.querySelector(".button_type_submit");
//-----------------------------------------------------------------------------FUNCTIONS FOR POPUP ADD
function formAddElementsOpen(event) {
  event.preventDefault();
  elements.prepend(
    getElement(formInputTypeTown.value, formInputTypeTownLink.value)
  );

  formAddElements.reset();
  closePopup(popupAddElements);
}

buttonTypeAdd.addEventListener("click", () => openPopup(popupAddElements));
formAddElements.addEventListener("submit", formAddElementsOpen);
//-----------------------------------------------------------------------------BUTTON LIKE ON ELEMENTS
function toggleLikeElement(event) {
  event.target.classList.toggle("button_type_like_on");
}
//-----------------------------------------------------------------------------RENDERING ELEMENTS
const templateElement = document.querySelector("template");
const elements = document.querySelector(".elements");

const elementsElement = /*const buttonTypeDeleteElement*/ [
  {
    town: "Собакен",
    townlink: "./images/dog.jpg",
  },
  {
    town: "Человекен",
    townlink: "./images/coder.jpg",
  },
  {
    town: "Джо",
    townlink: "https://c.tenor.com/psoPTJCAoJYAAAAC/joey-tribbiani-brain.gif",
  },
  {
    town: "Байкер",
    townlink:
      "https://images.unsplash.com/photo-1658064273986-844330ff8870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    town: "Яндекс беспилотники",
    townlink:
      "https://images.unsplash.com/photo-1625924305476-d8f96c560c21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    town: "LFCSFS:FVCS:NCSN:VCENsv;rb",
    townlink:
      "https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
];

function deleteElement(evtent) {
  const elementsElement = evtent.target.closest(".elements__element");
  elementsElement.remove();
}

function getElement(town, townlink) {
  const template = templateElement.content.cloneNode(true);
  const img = template.querySelector(".elements__foto");

  img.setAttribute("alt", town);
  img.setAttribute("src", townlink);
  img.addEventListener("click", overview);

  const h2 = template.querySelector(".elements__title");
  h2.textContent = town;
  const buttonTypeLike = template.querySelector(".button_type_like");
  buttonTypeLike.addEventListener("click", toggleLikeElement);
  const buttonTypeDeleteElement = template.querySelector(
    ".button_type_delete-element"
  );
  buttonTypeDeleteElement.addEventListener("click", deleteElement);

  return template;
}

function renderElements() {
  elements.innerHTML = "";
  elementsElement.forEach((element) =>
    elements.append(getElement(element.town, element.townlink))
  );
}

renderElements();

//-----------------------------------------------------------------------------VARIABLES FOR POPUP OVERVIEW
const popupOverview = document.querySelector(".popup_overview");
const overviewImage = document.querySelector(".overview__image");
const overviewCaption = document.querySelector(".overview__caption");
//-----------------------------------------------------------------------------FUNCTIONS FOR POPUP OVERVIEW
function overview(event) {
  const image = event.target;
  overviewImage.setAttribute("src", image.src);
  overviewImage.setAttribute("alt", image.alt);
  overviewCaption.textContent = image.alt;

  openPopup(popupOverview);
}
