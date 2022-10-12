import * as api from './api';

import {

    profilTitleFirstname,
    profilSubtitleProfession,
    avatarImage,  
    
  } from "./variables.js";

export let currentVisitor = {
    name: '',
    about: '',
    avatar: '',
    _id: '',
    cohort: '',
}

export function setProfile(profile) {
    currentVisitor = {...profile};
}

export function checkMeIn(visitors) {
    return visitors.some(visitor => visitorsIdentical(visitor, currentVisitor));
}

// export function visitorsIdentical(visitor1, visitor2) {
//     return visitor1._id === visitor2._id;
// }

export function getProfile() {
    return api.getProfile()
        .then(profile => {
            setProfile(profile);
            renderProfile();
        })
        .catch();
}

export function renderProfile() {
  profilTitleFirstname.textContent = currentVisitor.name;
  profilSubtitleProfession.textContent = currentVisitor.about;
  avatarImage.setAttribute('src', currentVisitor.avatar);
}