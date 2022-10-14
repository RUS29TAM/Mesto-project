"use strict";

import { selectorCardSettings, cardsContainer } from "./variables.js";
import {popupError, showImage} from "./modal.js";
import * as profile from "./profile.js";
import * as api from "./api";

const cardTemplate = document.querySelector(selectorCardSettings.template);

export const createCard = (card) => {
  const currentCard = cardTemplate.content.cloneNode(true);

  const cardImage = currentCard.querySelector(selectorCardSettings.image);
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.name);
  cardImage.addEventListener("click", (evt) => showImage(evt));

  const cardTitle = currentCard.querySelector(selectorCardSettings.title);
  cardTitle.textContent = card.name;

  const cardLikeButton = currentCard.querySelector(
    selectorCardSettings.likeButton
  );
  if (profile.verifyMe(card.likes)) {
    cardLikeButton.classList.add("button_type_like_on");
  }

  const cardLikesCount = currentCard.querySelector(
    selectorCardSettings.likesCount
  );
  cardLikesCount.textContent = card.likes.length;
  cardLikeButton.addEventListener("click", (evt) =>
    clickLikeBtn(card._id, evt, cardLikesCount)
  );

  const cardDeleteButton = currentCard.querySelector(
    selectorCardSettings.deleteButton
  );

  if (!profile.visitorsIdentical(card.owner, profile.currentVisitor)) {
    cardDeleteButton.remove();
  } else {
    const cardNode = currentCard.querySelector(selectorCardSettings.element);
    cardDeleteButton.addEventListener("click", () =>
      clickRemoveBtn(card._id, cardNode)
    );
    //                                          Планирую доделать, комментарий решил пока не удалять.

    // cardDeleteButton.addEventListener('click', () => showConfirmPopup(() => {
    //   deleteCard(card._id, cardNode)
    //         .then(() => {
    //             closeConfirmPopup();
    //         });
    // }));
  }
  return currentCard;
};

const clickRemoveBtn = (cardID, cardNode) => {
  return api
    .deleteCard(cardID)
    .then(() => deleteCard(cardNode))
    .catch((error) => popupError(error));
};

const likeCard = (cardLikesCountElement, likeElement, likeArray) => {
  cardLikesCountElement.textContent = likeArray.length;
  likeElement.classList.toggle("button_type_like_on");
}
const clickLikeBtn = (cardID, evt, cardLikesCountElement) => {
  const clickElement = evt.target;
  const updatedCard = clickElement.classList.contains("button_type_like_on")
    ? api.removeLike(cardID)
    : api.addLike(cardID);
  updatedCard
    .then((updatedCardData) => {
      likeCard(cardLikesCountElement, clickElement, updatedCardData.likes)
    })
    .catch((error) => popupError(error));
};

const deleteCard = (cardNode) => {
  cardNode.remove();
};

export const renderElement = (currentCard, toBeginning = true) => {
  toBeginning
    ? cardsContainer.prepend(currentCard)
    : cardsContainer.append(currentCard);
};

export const renderElements = function (requestElements) {
  requestElements.forEach((card) => renderElement(createCard(card), false));
};
