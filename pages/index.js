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
//-----------------------------------------------------------------------------VARIABLES FOR POPUP OVERVIEW
const popupOverview = document.querySelector(".popup_overview");
const overviewImage = document.querySelector(".overview__image");
const overviewCaption = document.querySelector(".overview__caption");
//-----------------------------------------------------------------------------VARIABLES FOR ELEMENTS
const templateElement = document.querySelector("template");
const elements = document.querySelector(".elements");
const elementsElement = [
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
//-----------------------------------------------------------------------------FUNCTIONS FOR OPEN/CLOSE POPUP
function openPopup(popup) {//open popup
  popup.classList.add("popup_opened");
}
function closePopup(popup) {//close popup
  popup.classList.remove("popup_opened");
}
//ADD LISTENER FOR CLOSE POPUP
const buttonTypeClose = document.querySelectorAll(".button_type_close");
buttonTypeClose.forEach((buttonTypeClose) => {//close on all cross button
  const popup = buttonTypeClose.closest(".popup");
  buttonTypeClose.addEventListener("click", () => closePopup(popup));
});
//ADD LISTENER POPUP PROFILE-EDIT
buttonTypeEdit.addEventListener("click", formEditProfileOpen);
formEditProfile.addEventListener("submit", closeFormEditProfile);
//ADD LISTENER FOR ADD ELEMENTS
buttonTypeAdd.addEventListener("click", () => openPopup(popupAddElements));
formAddElements.addEventListener("submit", formAddElementsOpen);
//-----------------------------------------------------------------------------FUNCTIONS FOR POPUP PROFILE-EDIT
function formEditProfileOpen() {//the data that will be displayed in the input field
  formInputTypeFirstname.value = profilTitleFirstname.textContent;
  formInputTypeProfession.value = profilSubtitleProfession.textContent;
  openPopup(popupEditProfile);
}

function closeFormEditProfile(event) {//data that will be sent after
  event.preventDefault();//Canceling the default browser action
  profilTitleFirstname.textContent = formInputTypeFirstname.value;
  profilSubtitleProfession.textContent = formInputTypeProfession.value;
  closePopup(popupEditProfile);
}
//-----------------------------------------------------------------------------FUNCTIONS FOR POPUP ADD
function formAddElementsOpen(event) {
  event.preventDefault();//Canceling the default browser action
  elements.prepend(//insert nodes or rows at the beginning
    getElement(formInputTypeTown.value, formInputTypeTownLink.value) //search method
  );

  formAddElements.reset();
  closePopup(popupAddElements);
}

//-----------------------------------------------------------------------------BUTTON LIKE ON ELEMENTS
function toggleLikeElement(event) {
  event.target.classList.toggle("button_type_like_on");
}
//-----------------------------------------------------------------------------RENDERING ELEMENTS
function deleteElement(evtent) {
  const elementsElement = evtent.target.closest(".elements__element");
  elementsElement.remove();
}

function getElement(town, townlink) {//search method 
  const template = templateElement.content.cloneNode(true); /*The cloneNode method allows you to clone an element and get an exact copy of it.
  This copy can then be inserted into the page using the methods prepend, append, appendChild, insertBefore or insertAdjacentElement.
   In the parameter, the method gets true or false. If true is passed, the element is cloned completely, 
   along with all attributes and child elements, and if false, only the element itself (without child elements).*/
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

  buttonTypeDeleteElement.addEventListener("click", deleteElement); //delete button on the image

  return template;
}

function renderElements() {
  elements.innerHTML = ""; //The innerHTML property allows you to get the HTML content of an element as a string.
  elementsElement.forEach((element) => //Iterating through the array
    elements.append(getElement(element.town, element.townlink)) /*method inserts a set of Node objects or string objects after the last child of the Element. 
String objects are inserted as equivalent Text nodes.*/
  );
}

renderElements();
//-----------------------------------------------------------------------------FUNCTIONS FOR POPUP OVERVIEW
function overview(event) {
  const image = event.target;
  overviewImage.setAttribute("src", image.src);
  overviewImage.setAttribute("alt", image.alt);
  overviewCaption.textContent = image.alt;

  openPopup(popupOverview);
}