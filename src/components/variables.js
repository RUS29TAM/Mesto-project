export const popupEditProfile = document.querySelector('.popup_edit-profile');
export const popupAddCard = document.querySelector('.popup_add-elements');
export const popupOverview = document.querySelector('.popup_overview');
export const popupEditAvatar = document.querySelector('.popup_edit-avatar');

export const formEditProfile = document.querySelector('.form_edit-profile');
export const formInputTypeFirstname = document.querySelector('.form__input_type_firstname');
export const formInputTypeProfession = document.querySelector('.form__input_type_profession');
export const formInputTypeTown = document.querySelector('.form__input_type_town');
export const formInputTypeTownLink = document.querySelector('.form__input_type_townlink');
export const formInputTypeAvatar = document.querySelector('.form__input_type_avatar'); 
export const formAddCard = document.querySelector('.form_add-elements');
export const formEditAvatar = document.querySelector('.form_edit-avatar'); 

export const profilTitleFirstname = document.querySelector('.profile__title-firstname');
export const profilSubtitleProfession = document.querySelector('.profile__subtitle-profession');

export const overviewImage = document.querySelector('.overview__image');
export const overviewCaption = document.querySelector('.overview__caption');

export const avatarLink = popupEditAvatar.querySelector('#avatar-input');
export const avatarImage = document.querySelector('#avatar');

export const buttonTypeAvatar = document.querySelector('.profile__info-avatar');
export const buttonElement = document.querySelector('.button_type_save');
export const buttonTypeEdit = document.querySelector('.button_type_edit');
export const buttonTypeAdd = document.querySelector('.button_type_add');

export const templateCard = document.querySelector('template');
export const cardsContainer = document.querySelector('.elements');

export const errorPopup = document.querySelector('.popup_error');
export const errorTextElement = errorPopup.querySelector('.form__title');

export const submitCardBtn = document.querySelector('#submit-card');
export const submitAvatarBtn = document.querySelector('#submit-avatar');

export const validationConfig = {
    formSelector: '.popup__box',
    inputSelector: '.form__input',
    submitButtonSelector: '.button_type_save',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'form__input-error',
    errorClass: 'form__input-error_active',
  }

export const selectorCardSettings = {
    template:'#template__element',
    container: '.elements',
    element:'.elements__element',
    image:'.elements__foto',
    title:'.elements__title',
    likeButton:'.button_type_like',
    deleteButton:'.button_type_delete-element',
    likesCount:'.element__like-count',
}



