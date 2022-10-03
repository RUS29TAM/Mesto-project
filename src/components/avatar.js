"use strict";
import { openformEditAvatar } from "./index.js";

export function getElementAvatar(link) {
    //search method //town reneme --> name //townlink reneme --> link
    const template =
    templateAvatar.content.cloneNode(
        true
      );
    const img = template.querySelector(".profile__info-avatar");
    img.setAttribute("src", link); //townlink reneme --> link
    img.addEventListener("click", openformEditAvatar);

    return template;
  }