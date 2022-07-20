"use strict";
//_____________________________________________________________________________VARIABLES FOR POPUP PROFILE-EDIT
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
//_____________________________________________________________________________VARIABLES FOR POPUP ADD
const popupAddElement = document.querySelector(".popup_add-elements");//<-----------------------------Fixed a bug in the variable name (popupAddElements --> popupAddElement)
const formInputTypeTown = document.querySelector(".form__input_type_town");
const formInputTypeTownLink = document.querySelector(
  ".form__input_type_townlink"
);
const elementsFoto = document.querySelector(".elements__foto");
const elementsTitle = document.querySelector(".elements__title");
const buttonTypeAdd = document.querySelector(".button_type_add");
const formAddElement = document.querySelector(".form_add-elements");//<-------------------------------Fixed a bug in the variable name (formAddElements --> formAddElement)
// const buttonTypeSubmit = document.querySelector(".button_type_submit");<---------------------------The variable has been removed because it is not currently used by the code structure.
//_____________________________________________________________________________VARIABLES FOR POPUP OVERVIEW
const popupOverview = document.querySelector(".popup_overview");
const overviewImage = document.querySelector(".overview__image");
const overviewCaption = document.querySelector(".overview__caption");
//_____________________________________________________________________________VARIABLES FOR ELEMENTS
const templateElement = document.querySelector("template");
const cardsContainer = document.querySelector(".elements");//<----------------------------------------Fixed a bug in the variable name (elements --> cardsContainer)
const elementsElement = [
  {
    town: "Собакен",
    townlink: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    town: "Человекен",
    townlink: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
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
//_____________________________________________________________________________FUNCTIONS FOR OPEN/CLOSE POPUP
function openPopup(popup) {//open popup
  popup.classList.add("popup_opened");
}
function closePopup(popup) {//close popup
  popup.classList.remove("popup_opened");
}
//ADD LISTENER FOR CLOSE POPUP
const buttonTypeCloseList = document.querySelectorAll(".button_type_close");//<---------------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
buttonTypeCloseList.forEach((buttonTypeCloseList) => {//close on all cross button//<----------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
  const popup = buttonTypeCloseList.closest(".popup");//<-------------------------------------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
  buttonTypeCloseList.addEventListener("click", () => closePopup(popup));//<------------------------Fixed a bug in the variable name (buttonTypeClose --> buttonTypeCloseList)
});
//ADD LISTENER POPUP PROFILE-EDIT
buttonTypeEdit.addEventListener("click", OpenformEditProfile);//<-----------------------------------Fixed a bug in the variable name (formEditProfileOpen --> OpenformEditProfile)
formEditProfile.addEventListener("submit", closeFormEditProfile);
//ADD LISTENER FOR ADD ELEMENTS
buttonTypeAdd.addEventListener("click", () => openPopup(popupAddElement));//<-----------------------Fixed a bug in the variable name (popupAddElements --> popupAddElement)
formAddElement.addEventListener("submit", formAddElementsOpen);//<----------------------------------Fixed a bug in the variable name (formAddElements --> formAddElement)
//_____________________________________________________________________________FUNCTIONS FOR POPUP PROFILE-EDIT
function OpenformEditProfile() {//the data that will be displayed in the input field//<-------------Fixed a bug in the variable name (formEditProfileOpen --> OpenformEditProfile)
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
//_____________________________________________________________________________FUNCTIONS FOR POPUP ADD
function formAddElementsOpen(event) {
  event.preventDefault();//Canceling the default browser action
  cardsContainer.prepend(//insert nodes or rows at the beginning//<---------------------------------Fixed a bug in the variable name (elements --> cardsContainer)
    getElement(formInputTypeTown.value, formInputTypeTownLink.value) //search method
  );

  formAddElement.reset();//<------------------------------------------------------------------------Fixed a bug in the variable name (formAddElements --> formAddElement)
  closePopup(popupAddElement);//<-------------------------------------------------------------------Fixed a bug in the variable name (popupAddElements --> popupAddElement)
}

//_____________________________________________________________________________BUTTON LIKE ON ELEMENTS
function toggleLikeElement(event) {
  event.target.classList.toggle("button_type_like_on");
}
//_____________________________________________________________________________RENDERING ELEMENTS
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
  const TitleFoto = template.querySelector(".elements__title");//<----------------------------------Fixed a bug in the variable name (h2 --> TitleFoto)
  TitleFoto.textContent = town;//<------------------------------------------------------------------Fixed a bug in the variable name (h2 --> TitleFoto)
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
  elementsElement.forEach((element) => //Iterating through the array
  cardsContainer.append(getElement(element.town, element.townlink)) /*method inserts a set of Node objects or string objects after the last child of the Element. 
String objects are inserted as equivalent Text nodes.*///<----------------Fixed a bug in the variable name (elements --> cardsContainer)
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