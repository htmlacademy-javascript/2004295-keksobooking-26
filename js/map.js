import {makeFormActive} from './form-toggle.js';
import {makeFormDisabled} from './form-toggle.js';
import {similarObjects} from './data.js';

makeFormDisabled();

const resetButton = document.querySelector('.ad-form__reset');
const defaultLocation = {
  lat: 35.7000,
  lng: 139.7000,
};

const map = L.map('map-canvas')
  .on('load', () => {
    makeFormActive();
  })
  .setView(
    defaultLocation
    , 11);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  defaultLocation,
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const addressElement = document.querySelector('#address');
  addressElement.value = `${(evt.target.getLatLng().lat).toFixed(5)}, ${(evt.target.getLatLng().lng).toFixed(5)}`;
});

const standartMarkericon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createStandartMarker = ((item) => {
  const lat = item.location.lat;
  const lng = item.location.lng;
  const standartMarker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: standartMarkericon,
    },
  );
  standartMarker
    .addTo(map);
  return standartMarker;
});

similarObjects.forEach((item) => {
  createStandartMarker(item);
});

resetButton.addEventListener('click', () => {
  mainMarker.setLatLng(defaultLocation);

  map.setView(
    defaultLocation
    , 11);
});
