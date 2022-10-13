"use strict";

const COHORTID = "plus-cohort-15";
const COHORTTOKEN = "0d4fb9d5-dd34-405c-82ac-856c24d548a6";

export const config = {
  baseUrl: `https://nomoreparties.co/v1/${COHORTID}`,
  headers: {
    authorization: COHORTTOKEN,
    "Content-Type": "application/json",
  },
};

export const checkRes = (request, method = "GET", body = "") => {
  const setting = {
    method: method,
    headers: config.headers,
  };

  if (method != "GET" && body) setting.body = JSON.stringify(body);

  return fetch(`${config.baseUrl}/${request}`, setting).then((res) => {
    if (res.ok) return res.json();
    return Promise.reject(res);
  });
};

export const getInitialCards = () => {
  return checkRes("cards");
};

export const getProfile = () => {
  return checkRes("users/me");
};

export const updateProfile = (name, about) => {
  return checkRes("users/me", "PATCH", { name, about });
};

export const addLike = (cardID) => {
  return checkRes(`cards/likes/${cardID}`, "PUT");
};

export const removeLike = (cardID) => {
  return checkRes(`cards/likes/${cardID}`, "DELETE");
};

export const deleteCard = (cardID) => {
  return checkRes(`cards/${cardID}`, "DELETE");
};

export const addCard = (cardName, cardImageUrl) => {
  return checkRes(`cards/`, "POST", { name: cardName, link: cardImageUrl });
};

export const updateAvatar = (avatarUrl) => {
  return checkRes("users/me/avatar", "PATCH", { avatar: avatarUrl });
};
