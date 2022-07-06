import {makeFormActive} from './form-toggle.js';
import {makeFormDisabled} from './form-toggle.js';

makeFormDisabled();

const resetButton = document.querySelector('.ad-form__reset');

const map = L.map('map-canvas')
  .on('load', () => {
    makeFormActive();
  })
  .setView({
    lat: 35.7000,
    lng: 139.7000,
  }, 11);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.7000,
    lng: 139.7000,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const addressElement = document.querySelector('#address');
  addressElement.value = `${(evt.target.getLatLng().lat).toFixed(5)}, ${(evt.target.getLatLng().lng).toFixed(5)}`;
});

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.7000,
    lng: 139.7000,
  });

  map.setView({
    lat: 35.7000,
    lng: 139.7000,
  }, 11);
});
