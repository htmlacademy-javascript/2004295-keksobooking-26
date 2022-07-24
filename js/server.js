import {createStandartMarker} from './map.js';
import {getRandomPositiveInteger} from './utils.js';

const SIMILAR_OBJECTS_COUNT = getRandomPositiveInteger(1, 10);

fetch('https://26.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offers) => offers.slice(0, SIMILAR_OBJECTS_COUNT).forEach((offer) => createStandartMarker(offer)))
  .catch();
