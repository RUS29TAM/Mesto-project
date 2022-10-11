"use strict";

const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-15",
  headers: {
    authorization: "0d4fb9d5-dd34-405c-82ac-856c24d548a6",
    "Content-Type": "application/json",
  },
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Error: ${res.status}`);
};

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const getInitialCards = () => {
  return request(`${config.baseUrl}/cards`, {
    headers: config.headers,
  });
};

export const getUserInfo = () => {
  return request(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  });
};
