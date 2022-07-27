import './api.js';
import './map.js';
import './nouislider.js';
import './map-filters.js';
import './form-validate.js';
import './pictures-upload.js';
import {getData} from './api.js';
import {initMap} from './map.js';
import {setAdverts} from './data.js';
import {makeFormDisabled} from './form-toggle.js';

const SIMILAR_OFFERS_COUNT = 10;

const onSuccessLoadData = (offers) => {
  setAdverts(offers);
  initMap(offers.slice(0, SIMILAR_OFFERS_COUNT));
};

makeFormDisabled();
getData(onSuccessLoadData);
