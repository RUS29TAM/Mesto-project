"use strict";

import { templateCard, cardsContainer,  } from "./variables.js";
import { showImage } from "./index.js";

export const elementsCards = [
  {
    name: "Собакен", //town reneme --> name //townlink reneme --> link
    link: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Человекен", //town reneme --> name //townlink reneme --> link
    link: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Джо", //town reneme --> name //townlink reneme --> link
    link: "https://c.tenor.com/psoPTJCAoJYAAAAC/joey-tribbiani-brain.gif",
  },
  {
    name: "Байкер", //town reneme --> name //townlink reneme --> link
    link: "https://images.unsplash.com/photo-1658064273986-844330ff8870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    name: "Яндекс беспилотники", //town reneme --> name //townlink reneme --> link
    link: "https://images.unsplash.com/photo-1625924305476-d8f96c560c21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "LFCSFS:FVCS:NCSN:VCENsv;rb", //town reneme --> name //townlink reneme --> link
    link: "https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
];

//_____________________________________________________________________________BUTTON LIKE ON ELEMENTS
export function toggleLikeCard(event) {
  event.target.classList.toggle("button_type_like_on");
}

//_____________________________________________________________________________RENDERING ELEMENTS
export function deleteCard(evtent) {
  const elementsCards = evtent.target.closest(".elements__element");
  elementsCards.remove();
}

export function getElement(name, link) {
  //search method //town reneme --> name //townlink reneme --> link
  const template =
  templateCard.content.cloneNode(
      true
    ); /*The cloneNode method allows you to clone an element and get an exact copy of it.
    This copy can then be inserted into the page using the methods prepend, append, appendChild, insertBefore or insertAdjacentElement.
     In the parameter, the method gets true or false. If true is passed, the element is cloned completely, 
     along with all attributes and child elements, and if false, only the element itself (without child elements).*/
  const img = template.querySelector(".elements__foto");
  img.setAttribute("alt", name); //town reneme --> name
  img.setAttribute("src", link); //townlink reneme --> link
  img.addEventListener("click", showImage);
  const titleFoto = template.querySelector(".elements__title"); 
  titleFoto.textContent = name; 
  const buttonTypeLike = template.querySelector(".button_type_like");

  buttonTypeLike.addEventListener("click", toggleLikeCard);
  const buttonTypeDeleteCard = template.querySelector(
    ".button_type_delete-element"
  );

  buttonTypeDeleteCard.addEventListener("click", deleteCard); //delete button on the image

  return template;
}

export function renderElements() {
  // elements.innerHTML = ""; //The innerHTML property allows you to get the HTML content of an element as a string.
  elementsCards.forEach(
    (
      element //Iterating through the array
    ) =>
      cardsContainer.append(
        getElement(element.name, element.link)
      ) /*method inserts a set of Node objects or string objects after the last child of the Element. 
  String objects are inserted as equivalent Text nodes.*/
  );
}

renderElements();
