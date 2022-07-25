import {createStandartMarker} from './map.js';
import {getRandomPositiveInteger, showErrorAlert} from './utils.js';

const SIMILAR_OFFERS_COUNT = getRandomPositiveInteger(1, 10);

const filterFormElement = document.querySelector('.map__filters');

const renderOffers = (offers) => {
  offers.slice(0, SIMILAR_OFFERS_COUNT).forEach((offer) => createStandartMarker(offer));
};

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

getData(renderOffers, () => showErrorAlert('Не удалось загрузить данные'));

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

export {sendData};
