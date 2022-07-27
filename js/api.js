import {onErrorAlert} from './utils.js';

const GET_DATA_URL = 'https://26.javascript.pages.academy/keksobooking/data';
const SEND_DATA_URL = 'https://26.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onError) => {
  fetch(GET_DATA_URL)
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
    .catch(() => onErrorAlert('Не удалось загрузить данные'));
};

const sendData = (body, onSuccess, onError) => {
  fetch(
    SEND_DATA_URL,
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
    .catch(onErrorAlert);
};

export {getData, sendData};
