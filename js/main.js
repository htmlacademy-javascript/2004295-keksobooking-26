import './form-validate.js';
import './map.js';
import './api.js';
import {getData} from './api.js';
import {createStandartMarker} from './map.js';
import {showErrorAlert, getRandomPositiveInteger} from './utils.js';

const SIMILAR_OFFERS_COUNT = getRandomPositiveInteger(1, 10);
const renderOffers = (offers) => {
  offers.slice(0, SIMILAR_OFFERS_COUNT).forEach((offer) => createStandartMarker(offer));
};

getData(renderOffers, () => showErrorAlert('Не удалось загрузить данные'));
