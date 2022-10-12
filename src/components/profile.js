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

export function verifyMe(visitors) {
    console.log(visitors)
    return visitors.some(visitor => visitorsIdentical(visitor));
}

export function visitorsIdentical(visitor1) {
    return visitor1._id === currentVisitor._id;
}

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