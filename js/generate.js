import {similarObjects} from './data.js';

const displayAreaElement = document.querySelector('#map-canvas');

const templateFragment = document.querySelector('#card').content; // Находим фрагмент с содержимым темплейта
const template = templateFragment.querySelector('.popup'); // В фрагменте находим нужный элемент
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1; i++) {
  const element = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"

  const titleElement = element.querySelector('.popup__title');
  const addressElement = element.querySelector('.popup__text--address');
  const priceElement = element.querySelector('.popup__text--price');
  const guestRoomsElement = element.querySelector('.popup__text--capacity');
  const timeCheckElement = element.querySelector('.popup__text--time');
  const descriptionElement = element.querySelector('.popup__description');
  const avatarElement = element.querySelector('img');

  // offer.features
  const randomFeaturesList = similarObjects[i].offer.features;
  const featuresContainerElement = element.querySelector('.popup__features'); // Список features ( UL )
  const featuresListElement = featuresContainerElement.querySelectorAll('.popup__feature'); // Коллекция features из шаблона в разметке
  if (similarObjects[i].offer.features) {
    const modifiers = randomFeaturesList.map((randomFeature) => `popup__feature--${randomFeature}`);
    featuresListElement.forEach((featuresListItem) => {
      const modifier = featuresListItem.classList[1]; // 1 - это индекс нужного класса в атрибуте class
      if (!modifiers.includes(modifier)) {
        featuresListItem.remove();
      }
    });
  } else {
    featuresContainerElement.innerHTML = '';
  }

  // offer.type
  const typeElement = element.querySelector('.popup__type');
  const typeEng = similarObjects[i].offer.type || '';
  const typeTranslate = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель',
  };
  typeElement.textContent = typeTranslate[typeEng];

  // offer.photos
  const randomPhotosArray = similarObjects[i].offer.photos; // Рандомный массив с photo.src
  const photosContainerElement = element.querySelector('.popup__photos'); // Контейнер photo в разметке
  const photoElement = element.querySelector('.popup__photo'); // Элемент photo в контейнере
  if (similarObjects[i].offer.photos) {
    photosContainerElement.innerHTML = '';
    randomPhotosArray.forEach((randomSource) => {
      const clonedPhotoElement = photoElement.cloneNode(true);
      photosContainerElement.insertAdjacentElement('beforeend', clonedPhotoElement);
      clonedPhotoElement.src = randomSource;
    });
  } else {
    photosContainerElement.innerHTML = '';
  }

  titleElement.textContent = similarObjects[i].offer.title || '';
  addressElement.textContent = similarObjects[i].offer.address || '';
  priceElement.innerHTML = (similarObjects[i].offer.price) ? `${similarObjects[i].offer.price  }<span>₽/ночь</span>` :  priceElement.innerHTML ='';
  guestRoomsElement.textContent = (similarObjects[i].offer.rooms && similarObjects[i].offer.guests) ? `${similarObjects[i].offer.rooms} комнаты для ${similarObjects[i].offer.guests} гостей` : guestRoomsElement.textContent = '';
  timeCheckElement.textContent = (similarObjects[i].offer.checkin && similarObjects[i].offer.checkout) ? `Заезд после ${similarObjects[i].offer.checkin}, выезд до ${similarObjects[i].offer.checkout}` : timeCheckElement.textContent = '';
  descriptionElement.textContent = similarObjects[i].offer.description || '';
  avatarElement.src = (similarObjects[i].author.avatar) ? similarObjects[i].author.avatar : avatarElement.style.display = 'none';

  fragment.appendChild(element);
}

displayAreaElement.appendChild(fragment);
