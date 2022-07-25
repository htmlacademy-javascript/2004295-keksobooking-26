import {showErrorAlert} from './utils.js';

const filterFormElement = document.querySelector('.map__filters');

const getData = (onSuccess, onError) => {

  filterFormElement.classList.add('ad-form--disabled');

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
    .catch(() => showErrorAlert('Не удалось загрузить данные'))
    .finally(() => filterFormElement.classList.remove('ad-form--disabled'));
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
