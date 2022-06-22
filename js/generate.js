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
  const type = element.querySelector('.popup__type');
  const guestRooms = element.querySelector('.popup__text--capacity');
  const timeCheck = element.querySelector('.popup__text--time');

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

  const description = element.querySelector('.popup__description');
  const photos = element.querySelector('.popup__photos'); //TODO
  const img = element.querySelector('img');

  title.textContent = similarObjects[i].offer.title;
  address.textContent = similarObjects[i].offer.address;
  price.innerHTML = `${similarObjects[i].offer.price  }<span>₽/ночь</span>`;
  type.textContent = 'kkkk'; //TODO
  guestRooms.textContent = `${similarObjects[i].offer.rooms} комнаты для ${similarObjects[i].offer.guests} гостей`;
  timeCheck.textContent = `Заезд после ${similarObjects[i].offer.checkin}, выезд до ${similarObjects[i].offer.checkout}`;

  description.textContent = similarObjects[i].offer.description;
  img.src = similarObjects[i].author.avatar;
  photos.src = //TODO

  fragment.appendChild(element);
}

displayThis.appendChild(fragment);
