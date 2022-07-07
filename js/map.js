import {makeFormActive} from './form-toggle.js';
import {makeFormDisabled} from './form-toggle.js';
import {similarObjects} from './data.js';
import {createCustomOffer} from './offer-generate.js';

makeFormDisabled();

const resetButton = document.querySelector('.ad-form__reset');
const DEFAULT_LOCATION = {
  lat: 35.7000,
  lng: 139.7000,
};

const map = L.map('map-canvas')
  .on('load', () => {
    makeFormActive();
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

mainMarker.on('moveend', (evt) => {
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
  const standartMarker = L.marker(
    {
      lat: item.location.lat,
      lng: item.location.lng,
    },
    {
      icon: standartMarkericon,
    },
  );
  standartMarker
    .addTo(standartMarkerGroup)
    .bindPopup(createCustomOffer(item));
});

similarObjects.forEach((object) => createStandartMarker(object));

//Если нужно удалить слой
// standartMarkerGroup.clearLayers();

//Переключаться между слоями (ПРИМЕР)
// nextButton.addEventListener('click', () => {
//   standartMarkerGroup.clearLayers();
//   similarObjects.slice(similarObjects.length / 2).forEach((point) => {
//     createStandartMarker(point);
//   });
//   nextButton.remove();
// });

//*Reset
resetButton.addEventListener('click', () => {
  mainMarker.setLatLng(DEFAULT_LOCATION);

  map.setView(
    DEFAULT_LOCATION
    , 12);
});
