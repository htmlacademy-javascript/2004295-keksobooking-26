import {similarObjects} from './data.js';

const displayThis = document.querySelector('#map-canvas');

const templateFragment = document.querySelector('#card').content; // Находим фрагмент с содержимым темплейта
const template = templateFragment.querySelector('.popup'); // В фрагменте находим нужный элемент

const fragment = document.createDocumentFragment();

for (let i = 0; i < 1; i++) {
  const element = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"

  const title = element.querySelector('.popup__title');
  const address = element.querySelector('.popup__text--address');
  const price = element.querySelector('.popup__text--price');
  const guestRooms = element.querySelector('.popup__text--capacity');
  const timeCheck = element.querySelector('.popup__text--time');
  const description = element.querySelector('.popup__description');
  const img = element.querySelector('img');

  const randomFeaturesList = similarObjects[i].offer.features; // Рандомный массив
  const featuresContainer = element.querySelector('.popup__features'); // Список features ( UL )
  const featuresList = featuresContainer.querySelectorAll('.popup__feature'); // Коллекция features из шаблона в разметке
  const modifiers = randomFeaturesList.map((randomFeature) => `popup__feature--${randomFeature}`);
  featuresList.forEach((featuresListItem) => {
    const modifier = featuresListItem.classList[1]; // 1 - это индекс нужного класса в атрибуте class

    if (!modifiers.includes(modifier)) {
      featuresListItem.remove();
    }
  });

  const type = element.querySelector('.popup__type');
  const typeEng = similarObjects[i].offer.type;
  const typeTranslate = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель',
  };
  type.textContent = typeTranslate[typeEng];

  const randomPhotosArray = similarObjects[i].offer.photos; // Рандомный массив с photo.src
  const photosContainer = element.querySelector('.popup__photos'); // Контейнер photo в разметке
  const photoElement = element.querySelector('.popup__photo'); // Элемент photo в контейнере
  const clonedPhotoElement = photoElement.cloneNode(true);
  photosContainer.innerHTML = '';

  for (let e = 0; e < randomPhotosArray.length; e++) {
    photosContainer.insertAdjacentElement('beforeend', clonedPhotoElement);
    clonedPhotoElement.src = randomPhotosArray[e];
  }

  title.textContent = similarObjects[i].offer.title;
  address.textContent = similarObjects[i].offer.address;
  price.innerHTML = `${similarObjects[i].offer.price  }<span>₽/ночь</span>`;
  guestRooms.textContent = `${similarObjects[i].offer.rooms} комнаты для ${similarObjects[i].offer.guests} гостей`;
  timeCheck.textContent = `Заезд после ${similarObjects[i].offer.checkin}, выезд до ${similarObjects[i].offer.checkout}`;
  description.textContent = similarObjects[i].offer.description;
  img.src = similarObjects[i].author.avatar;

  fragment.appendChild(element);
}

displayThis.appendChild(fragment);
