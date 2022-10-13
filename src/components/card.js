'use strict';

import {  selectorCardSettings, cardsContainer } from './variables.js';
import { showConfirmPopup, closeConfirmPopup, showImage  } from './modal.js';

import * as profile from './profile.js'
import * as api from './api';

const cardTemplate = document.querySelector(selectorCardSettings.template); 

export const createCard = (card) => {
  const currentCard  = cardTemplate.content.cloneNode(true);
  
  const cardImage = currentCard .querySelector(selectorCardSettings.image);
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt', card.name);
  cardImage.addEventListener('click', (evt) => showImage(evt));

  const cardTitle = currentCard .querySelector(selectorCardSettings.title);
  cardTitle.textContent = card.name;

  const cardLikeButton = currentCard .querySelector(selectorCardSettings.likeButton);
  if (profile.verifyMe(card.likes)) {
      cardLikeButton.classList.add('button_type_like_on');
  }


const cardLikesCount = currentCard .querySelector(selectorCardSettings.likesCount);
    cardLikesCount.textContent = card.likes.length;
    
    cardLikeButton.addEventListener('click', () => {
        const updatedCard = cardLikeButton.classList.contains('button_type_like_on') ? api.removeLike(card._id) : api.addLike(card._id);
        updatedCard
            .then(updatedCardData => {
            cardLikesCount.textContent = updatedCardData.likes.length
            cardLikeButton.classList.toggle('button_type_like_on')
            })
            .catch((error) => popupError(error));
    });

const cardDeleteButton = currentCard.querySelector(selectorCardSettings.deleteButton);
    
    if (!profile.visitorsIdentical(card.owner, profile.currentVisitor)) {
        cardDeleteButton.remove();
    } else {
        const cardNode = currentCard.querySelector(selectorCardSettings.element);
        cardDeleteButton.addEventListener('click', () => deleteCard(card._id, cardNode))
        // cardDeleteButton.addEventListener('click', () => showConfirmPopup(() => {
        //   deleteCard(card._id, cardNode)
        //         .then(() => {
        //             closeConfirmPopup();
        //         });
        // }));
    }
    return currentCard ;
}

const deleteCard = (cardID, cardNode) => {
  return api.deleteCard(cardID)
  .then(()=> cardNode.remove())
  .catch((error) => popupError(error));
} 

export const renderElement = (currentCard , toBeginning = true) => {
  
  toBeginning ? cardsContainer.prepend(currentCard) : cardsContainer.append(currentCard);
  
}

export const renderElements = function(requestElements) {

  requestElements.forEach(card => renderElement(createCard(card), false));

}


// //_____________________________________________________________________________BUTTON LIKE ON ELEMENTS
// export function toggleLikeCard(event) {
//   event.target.classList.toggle('button_type_like_on');
// }

// //_____________________________________________________________________________RENDERING ELEMENTS
// export function deleteCard(evtent) {
//   const elementsCards = evtent.target.closest('.elements__element');
//   elementsCards.remove();
// }

// export function getElement(name, link) {
//   //search method //town reneme --> name //townlink reneme --> link
//   const template =
//   templateCard.content.cloneNode(
//       true
//     ); /*The cloneNode method allows you to clone an element and get an exact copy of it.
//     This copy can then be inserted into the page using the methods prepend, append, appendChild, insertBefore or insertAdjacentElement.
//      In the parameter, the method gets true or false. If true is passed, the element is cloned completely, 
//      along with all attributes and child elements, and if false, only the element itself (without child elements).*/
//   const img = template.querySelector('.elements__foto');
//   img.setAttribute('alt', name); //town reneme --> name
//   img.setAttribute('src', link); //townlink reneme --> link
//   img.addEventListener('click', showImage);
//   const titleFoto = template.querySelector('.elements__title'); 
//   titleFoto.textContent = name; 
//   const buttonTypeLike = template.querySelector('.button_type_like');
//   buttonTypeLike.addEventListener('click', toggleLikeCard);
//   const buttonTypeDeleteCard = template.querySelector('.button_type_delete-element');
//   buttonTypeDeleteCard.addEventListener('click', deleteCard); //delete button on the image

//   return template;
// }

// export function renderElements() {
//   // elements.innerHTML = ''; //The innerHTML property allows you to get the HTML content of an element as a string.
//   elementsCards.forEach(
//     (
//       element //Iterating through the array
//     ) =>
//       cardsContainer.append(
//         getElement(element.name, element.link)
//       ) /*method inserts a set of Node objects or string objects after the last child of the Element. 
//   String objects are inserted as equivalent Text nodes.*/
//   );
// }

// renderElements();
