import {createCustomCard} from './card-generate.js';
import {makeFormActive} from './form-toggle.js';
import { state } from './data.js';
import { debounce } from './utils.js';

const DEFAULT_LOCATION = {
  lat: 35.7000,
  lng: 139.7000,
};

const map = L.map('map-canvas')
  .on('load', () => {
  })
  .setView(
    DEFAULT_LOCATION
    , 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//main marker
const mainMarkerIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  DEFAULT_LOCATION,
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('drag', (evt) => {
  const addressElement = document.querySelector('#address');
  addressElement.value = `${(evt.target.getLatLng().lat).toFixed(5)}, ${(evt.target.getLatLng().lng).toFixed(5)}`;
});

//standart marker
const standartMarkericon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const standartMarkerGroup = L.layerGroup().addTo(map);

const createStandartMarker = ((item) => {
  L.marker(
    {
      lat: item.location.lat,
      lng: item.location.lng,
    },
    {
      icon: standartMarkericon,
    },
  )
    .addTo(standartMarkerGroup)
    .bindPopup(createCustomCard(item));
});

const renderMarkers = (offers) => {
  standartMarkerGroup.clearLayers();
  offers.forEach((offer) => createStandartMarker(offer));
};

const renderMarkersWithDebounce = (offers) => debounce(() => renderMarkers(offers))();

const initMap = (offers) => {
  renderMarkers(offers);
  makeFormActive();
};

//* Реализация noUIslider

const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
const DEFAULT_PRICE_VALUE = 1000;

valueElement.value = DEFAULT_PRICE_VALUE;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: DEFAULT_PRICE_VALUE,
  step: 1,
  connect: 'lower',
  format: {
    to:
    (value) => Number.isInteger(value) ? value : value.toFixed(0),
    from:
    (value) => parseFloat(value),
  },
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

//Map reset
const mapReset = () => {
  mainMarker.setLatLng(DEFAULT_LOCATION);

  map.setView(
    DEFAULT_LOCATION
    , 12);

  sliderElement.noUiSlider.set(DEFAULT_PRICE_VALUE);
  renderMarkersWithDebounce(state.adverts.slice(0, 10));
};

export {createStandartMarker, mapReset, renderMarkersWithDebounce, initMap};
