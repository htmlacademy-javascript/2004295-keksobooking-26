import {similarObjects} from './data.js';

const templateFragment = document.querySelector('#card').content; // Темплейт
const template = templateFragment.querySelector('.popup'); // Нужный элемент в фрагменте
const fragment = document.createDocumentFragment();

const element = template.cloneNode(true);

const titleElement = element.querySelector('.popup__title');
const addressElement = element.querySelector('.popup__text--address');
const priceElement = element.querySelector('.popup__text--price');
const guestRoomsElement = element.querySelector('.popup__text--capacity');
const timeCheckElement = element.querySelector('.popup__text--time');
const descriptionElement = element.querySelector('.popup__description');
const avatarElement = element.querySelector('img');

// offer.features
const featuresArray = similarObjects[0].offer.features;
const featuresContainerElement = element.querySelector('.popup__features');
const featuresListElement = featuresContainerElement.querySelectorAll('.popup__feature');
if (featuresArray) {
  const modifiers = featuresArray.map((anyFeature) => `popup__feature--${anyFeature}`);
  featuresListElement.forEach((feature) => {
    const modifier = feature.classList[0]; // Индекс нужного класса
    if (!modifiers.includes(modifier)) {
      feature.remove();
    }
  });
} else {
  featuresContainerElement.innerHTML = '';
}

// offer.type
const typeElement = element.querySelector('.popup__type');
const typeEng = similarObjects[0].offer.type || '';
const typeTranslate = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
typeElement.textContent = typeTranslate[typeEng] || '';

// offer.photos
const photosArray = similarObjects[0].offer.photos;
const photosContainerElement = element.querySelector('.popup__photos'); // Контейнер photo в разметке
const photoElement = element.querySelector('.popup__photo'); // Элемент photo в контейнере
photosContainerElement.innerHTML = '';
if (photosArray) {
  photosArray.forEach((photo) => {
    const clonedPhotoElement = photoElement.cloneNode(true);
    photosContainerElement.insertAdjacentElement('beforeend', clonedPhotoElement);
    clonedPhotoElement.src = photo;
  });
}

titleElement.textContent = similarObjects[0].offer.title || '';
addressElement.textContent = similarObjects[0].offer.address || '';
priceElement.innerHTML = similarObjects[0].offer.price ? `${similarObjects[0].offer.price  }<span>₽/ночь</span>` : '';
guestRoomsElement.textContent = similarObjects[0].offer.rooms && similarObjects[0].offer.guests ? `${similarObjects[0].offer.rooms} комнаты для ${similarObjects[0].offer.guests} гостей` : '';
timeCheckElement.textContent = similarObjects[0].offer.checkin && similarObjects[0].offer.checkout ? `Заезд после ${similarObjects[0].offer.checkin}, выезд до ${similarObjects[0].offer.checkout}` : '';
descriptionElement.textContent = similarObjects[0].offer.description || '';
avatarElement.src = similarObjects[0].author.avatar ? similarObjects[0].author.avatar : avatarElement.style.display = 'none';

fragment.appendChild(element);
