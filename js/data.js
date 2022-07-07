import {getRandomPositiveInteger} from './util.js';
import {getRandomPositiveFloat} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getRandomArray} from './util.js';

const TIME_TO_CHECK = [
  '12:00',
  '13:00',
  '14:00',
];
const TYPE_OF_RESIDENCE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// Добавляет передний 0 для однозначного числа
const getFormattedId = (id) => (String(id).length < 2) ? `0${id}` : id;

// Создание итогового объекта
const createNewOffer = (index) => {
  const location = {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
  };

  return {
    author : {
      avatar: `img/avatars/user${getFormattedId(index + 1)}.png`
    },

    offer : {
      title: 'заголовок_предложения',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(0, 100000),
      type: getRandomArrayElement(TYPE_OF_RESIDENCE),
      rooms: getRandomPositiveInteger(0, 10),
      guests: getRandomPositiveInteger(0, 10),
      checkin: getRandomArrayElement(TIME_TO_CHECK),
      checkout: getRandomArrayElement(TIME_TO_CHECK),
      features: getRandomArray(FEATURES),
      description: 'описание_помещения',
      photos: getRandomArray(PHOTOS)
    },

    location
  };
};

const SIMILAR_OBJECTS_COUNT = 10;

const similarObjects = Array.from({length: SIMILAR_OBJECTS_COUNT}, (_, i) => createNewOffer(i));

export {similarObjects};
