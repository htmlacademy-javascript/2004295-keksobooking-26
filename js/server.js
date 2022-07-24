import {createStandartMarker} from './map.js';
import {getRandomPositiveInteger, showSuccessAlert, showErrorAlert} from './utils.js';
import {resetForm} from './form-validate.js';

const SIMILAR_OFFERS_COUNT = getRandomPositiveInteger(1, 10);
const submitButton = document.querySelector('.ad-form__submit');
const filterFormElement = document.querySelector('.map__filters');

const renderOffers = (offers) => {
  offers.slice(0, SIMILAR_OFFERS_COUNT).forEach((offer) => createStandartMarker(offer));
};

const getData = (onSuccess) => {

  filterFormElement.classList.add('ad-form--disabled');

  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => onSuccess(offers))
    .then(() => filterFormElement.classList.remove('ad-form--disabled'))
    .catch(() => showErrorAlert('Не удалось загрузить данные'));
};

getData(renderOffers);

const sendData = (body) => {
  submitButton.disabled = true;
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        showSuccessAlert();
        resetForm();
      } else {
        showErrorAlert('Не удалось отправить данные');
      }
    })
    .catch(showErrorAlert)
    .finally(submitButton.disabled = false);
};

export {sendData};
