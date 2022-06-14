// Случайное ЦЕЛОЕ положительные число из переданного диапазона включительно
function getRandomPositiveInteger(min, max) {
  if (max <= min) {
    throw new Error('Задан неверный диапазон. Максимальное значение должно быть больше минимального.');
  }
  else if (min < 0) {
    throw new Error('Задан неверный диапазон. Диапазон может быть только положительный, включая ноль.');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Случайное число С ПЛАВАЮЩЕЙ ТОЧКОЙ из переданного диапазона включительно
function getRandomPositiveFloat(min, max, symbolsAfterDot) {
  if (max <= min) {
    throw new Error('Задан неверный диапазон. Максимальное значение должно быть больше минимального.');
  }
  else if (min < 0) {
    throw new Error('Задан неверный диапазон. Диапазон может быть только положительный, включая ноль.');
  }
  return +((min + Math.random() * (max - min)).toFixed(symbolsAfterDot));
}

// *Раздел 4.15. Задание: Создание массива из 10 сгенерированных JS-объектов

const SIMILAR_OBJECTS_COUNT = 10;
const TIME_TO_CHECK = ['12:00', '13:00', '14:00'];
const TYPE_OF_RESIDENCE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function getFormattedId(id) {
  if (id !== 10) {
    return `0${id}`;
  }
  return id;
}

// Генерация одного из фиксированных значений
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Генерация массива случайной длины из значений (без повторов).
function getRandomArray(array) {
  const MAX_LENGTH = array.length;
  const randomLength = getRandomPositiveInteger(1, MAX_LENGTH);
  const newArray = [];

  while (newArray.length < randomLength) {
    const randomIndex = getRandomPositiveInteger(0, MAX_LENGTH - 1);
    const el = array[randomIndex];
    const isUniq = !newArray.includes(el);

    if (isUniq) {
      newArray.push(el);
    }
  }
  return newArray;
}

// Создание итогового объекта
const createNewObject = (index) => {
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
      address: `${location.lat}, ${location.lng}`, //?
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

const similarObjects = Array.from({length: SIMILAR_OBJECTS_COUNT}, (_, i) => createNewObject(i));

similarObjects();
