//-----------------------------------------------------------------------------VARIABLES FOR POPUP PROFILE-EDIT
const popupEditProfile = document.querySelector(".popup_edit-profile");
const form = document.querySelector("form");
const formInputTypeFirstname = document.querySelector(".form__input_type_firstname");
const formInputTypeProfession = document.querySelector(".form__input_type_profession");
const profileInfo = document.querySelector(".profile__info");
const profilTitleFirstname = document.querySelector(".profile__title-firstname");
const profilSubtitleProfession = document.querySelector(".profile__subtitle-profession");
const buttonTypeEdit = document.querySelector(".button_type_edit");
const buttonTypeSave = document.querySelector(".button_type_save");
const formInput = document.querySelector(".form__input");

//-----------------------------------------------------------------------------FUNCTIONS FOR OPEN/CLOSE POPUP 
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

const buttonTypeClose = document.querySelectorAll(".button_type_close");

buttonTypeClose.forEach(buttonTypeClose => {
  const popup = buttonTypeClose.closest(".popup");
  buttonTypeClose.addEventListener("click", () => closePopup(popup));
});

//-----------------------------------------------------------------------------FUNCTIONS FOR POPUP PROFILE-EDIT

function profileEditForm() {
  formInputTypeFirstname.value = profilTitleFirstname.textContent;
  formInputTypeProfession.value = profilSubtitleProfession.textContent;
  openPopup(popupEditProfile);
}

function closeProfileEditForm (event) {
  event.preventDefault();
  profilTitleFirstname.textContent = formInputTypeFirstname.value;
  profilSubtitleProfession.textContent = formInputTypeProfession.value;
  closePopup(profileEditForm);
}

buttonTypeEdit.addEventListener("click", profileEditForm);
buttonTypeSave.addEventListener("submit", closeProfileEditForm);



/*function getProfile() {
    return {
      firstname: profilTitleFirstname.textContent,
      profession: profilSubtitleProfession.textContent,
    };
  }

function setProfile(userProfile) {
    profilTitleFirstname.textContent = userProfile.firstname;
    profilSubtitleProfession.textContent = userProfile.profession;
  }

function openEditForm() {
    let userProfile = getProfile();
    formInputTypeFirstname.setAttribute("value", userProfile.firstname);
    formInputTypeProfession.value = userProfile.profession;
    popupEditProfile.classList.add("popup_opened");
  }

function saveProfile(evt) {
    evt.preventDefault();
      let userProfile = {
      firstname: formInputTypeFirstname.value,
      profession: formInputTypeProfession.value,
    };
    setProfile(userProfile);
    closeEditForm();
  }

function closeEditForm() {
    popupEditProfile.classList.remove("popup_opened");
  }*/
//-----------------------------------------------------------------------------LISTENER FOR POPUP PROFILE-EDIT
/*buttonTypeEdit.addEventListener("click", openEditForm);
buttonTypeSave.addEventListener("click", saveProfile);*/
//-----------------------------------------------------------------------------LISTENER BUTTON CLOSE IN ALL POPUP
/*function closePopup(event) {
    const popup = event.target.closest(".popup");
    popup && popup.classList.remove("popup_opened");
  }
  
  buttonTypeClose = document.querySelectorAll(".button_type_close");
  buttonTypeClose.forEach((buttonTypeClose) =>
    buttonTypeClose.addEventListener("click", closePopup)
  );
  */

/*
//-----------------------------------------------------------------------------VARIABLES FOR POPUP ADD 
const popupAddElements = document.querySelector(".popup_add-elements");
const formAddElements = document.querySelector(".form_add-elements");
const formInputTypeTown = document.querySelector(".form__input_type_town");
const formInputTypeTownLink = document.querySelector(".form__input_type_town-link");
const elementsFoto = document.querySelector(".elements__foto");
const elementsTitle = document.querySelector(".elements__title");
const buttonTypeAdd = document.querySelector('.button_type_add');
const buttonTypeSubmit = document.querySelector(".button_type_submit");
//-----------------------------------------------------------------------------FUNCTIONS FOR POPUP ADD 
function openAddForm() {
    popupAddElements.classList.add("popup_opened");
  }

function setElements(elementsInfo) {
    elementsFoto.textContent = elementsInfo.town;
    elementsTitle.textContent = elementsInfo.townLink;
  }

function AddElements(evt) {
    evt.preventDefault();
  
    let elementsInfo = {
      town: formInputTypeTown.value,
      townLink: formInputTypeTownLink.value,
    };
  
    formInputTypeTown.value = "";
    formInputTypeTownLink.value = "";
  
    setElements(elementsInfo);
    popupAddElements.classList.remove("popup_opened");
  }
//-----------------------------------------------------------------------------LISTENER FOR POPUP ADD 
buttonTypeAdd.addEventListener("click", openAddForm);
buttonTypeSubmit.addEventListener("click", AddElements);
//-----------------------------------------------------------------------------VARIABLES FOR POPUP OVERVIEW 
const popupOverview = document.querySelector(".popup_overview");
const overviewImage = document.querySelector(".overview__image");
const overviewCaption = document.querySelector(".overview__caption");

//-----------------------------------------------------------------------------FUNCTIONS FOR POPUP OVERVIEW
/*function popupOverview(event) {
const image = event.target;
overviewImage.setAttribute("src", image.src);
overviewImage.setAttribute("alt", image.alt);
overviewCaption.textContent = image.alt;

openPopup(popupOverview);

}





/*function popupOverviewOpened() {
  popupOverview.classList.add("popup_opened");
}

elementsFoto.addEventListener("click", popupOverviewOpened);*/

/*function renderCardPopup(evt) {
  openPopup(overviewImage);
  
  const elementsFoto = evt.target;
  const elementsElement = elementsFoto.closest(".elements__element");
  /*const elementsTitle = elementsElement.querySelector(".elements__title");*/

 /* overviewImage.src = overviewImage.src;
  overviewImage.alt = overviewCaption.textContent;
  overviewCaption.textContent = overviewCaption.textContent;*/



 


