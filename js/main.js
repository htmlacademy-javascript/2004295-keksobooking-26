// Источник: MDN Web Docs

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

// *! Раздел 4.15.
//Задание: Создание массива из 10 сгенерированных JS-объектов

// генерация id для author.avatar
function getAvatarId() {
  const randomId = getRandomPositiveInteger(1, 10);
  if (randomId.length < 2) {
    return `0${randomId}`;
  }
  return randomId;
}

// генерация одного из значений массива для offer.checkin и offer.checkout
const timeToCheckArray = ['12:00', '13:00', '14:00'];

// генерация одного из значений массива для offer.type
const typeOfResidenceArray = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

// сама функция
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// ?Списал но не разобрался - массив случайной длины из значений. Значения не должны повторяться. для offer.features
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function getRandomArray(array) {
  const maxLength = array.length;
  const randomLength = getRandomPositiveInteger(1, maxLength);
  const newArray = [];

  while (newArray.length < randomLength) {
    const randomIndex = getRandomPositiveInteger(0, maxLength - 1);
    const el = array[randomIndex];
    const isUniq = !newArray.includes(el);

    if (isUniq) {
      newArray.push(el);
    }
  }
  return newArray;
}

// генерация массива случайной длины из значений для offer.photos
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

//todo Функция
const createNewObject = () => {
  const location = {
    lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng: getRandomPositiveFloat(139.70000, 139.80000, 5)
  };

  return {
    author : {
      avatar: `img/avatars/user${getAvatarId()}.png`
    },

    offer : {
      title: 'заголовок_предложения',
      address: `${location.lat}, ${location.lng}`, //?
      price: getRandomPositiveInteger(0, 100000),
      type: getRandomArrayElement(typeOfResidenceArray),
      rooms: getRandomPositiveInteger(0, 10),
      guests: getRandomPositiveInteger(0, 10),
      checkin: getRandomArrayElement(timeToCheckArray),
      checkout: getRandomArrayElement(timeToCheckArray),
      features: getRandomArray(features),
      description: 'описание_помещения',
      photos: getRandomArray(photos)
    },

    location
  };
};

// Клонируем 10 объектов из нашей функции
const similarObjects = Array.from({length: 10}, createNewObject);

// eslint-disable-next-line no-console
console.log(similarObjects);
