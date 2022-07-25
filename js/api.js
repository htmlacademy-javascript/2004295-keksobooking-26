import {showErrorAlert} from './utils.js';

const getData = (onSuccess, onError) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onError();
      }
    })
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => showErrorAlert('Не удалось загрузить данные'));
};

const sendData = (body, onSuccess, onError) => {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(showErrorAlert);
};

export {getData, sendData};
