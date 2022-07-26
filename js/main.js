import './form-validate.js';
import './map.js';
import './api.js';
import './map-filters.js';
import './pictures-upload.js';
import {getData} from './api.js';
import {initMap} from './map.js';
import {makeFormDisabled} from './form-toggle.js';
// import {getAdvertFilters} from './map-filters.js';
import { setAdverts } from './data.js';

makeFormDisabled();

const SIMILAR_OFFERS_COUNT = 10;

const onSuccessLoadData = (offers) => {
  setAdverts(offers);
  initMap(offers.slice(0, SIMILAR_OFFERS_COUNT));
};

getData(onSuccessLoadData);
// getData(renderOffers, () => showErrorAlert('Не удалось загрузить данные'));
