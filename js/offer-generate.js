const TYPE_TRANSLATE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('.popup');

const createCustomOffer = (newItem) => {
  const element = template.cloneNode(true);
  const titleElement = element.querySelector('.popup__title');
  const addressElement = element.querySelector('.popup__text--address');
  const priceElement = element.querySelector('.popup__text--price');
  const guestRoomsElement = element.querySelector('.popup__text--capacity');
  const timeCheckElement = element.querySelector('.popup__text--time');
  const descriptionElement = element.querySelector('.popup__description');
  const avatarElement = element.querySelector('img');
  const featuresContainerElement = element.querySelector('.popup__features');
  const featuresListElement = featuresContainerElement.querySelectorAll('.popup__feature');
  const typeElement = element.querySelector('.popup__type');
  const photosContainerElement = element.querySelector('.popup__photos'); // Контейнер photo в разметке
  const photoElement = element.querySelector('.popup__photo'); // Элемент photo в контейнере

  // offer.features
  const featuresArray = newItem.offer.features;
  if (featuresArray) {
    const modifiers = featuresArray.map((anyFeature) => `popup__feature--${anyFeature}`);
    featuresListElement.forEach((feature) => {
      if (!modifiers.includes(newItem)) {
        feature.remove();
      }
    });
  } else {
    featuresContainerElement.innerHTML = '';
  }

  // offer.type
  const typeEng = newItem.offer.type || '';
  typeElement.textContent = TYPE_TRANSLATE[typeEng] || '';

  // offer.photos
  const photosArray = newItem.offer.photos;
  photosContainerElement.innerHTML = '';
  if (photosArray) {
    photosArray.forEach((photo) => {
      const clonedPhotoElement = photoElement.cloneNode(true);
      photosContainerElement.insertAdjacentElement('beforeend', clonedPhotoElement);
      clonedPhotoElement.src = photo;
    });
  }

  titleElement.textContent = newItem.offer.title || '';
  addressElement.textContent = newItem.offer.address || '';
  priceElement.innerHTML = newItem.offer.price ? `${newItem.offer.price  }<span>₽/ночь</span>` : '';
  guestRoomsElement.textContent = newItem.offer.rooms && newItem.offer.guests ? `${newItem.offer.rooms} комнаты для ${newItem.offer.guests} гостей` : '';
  timeCheckElement.textContent = newItem.offer.checkin && newItem.offer.checkout ? `Заезд после ${newItem.offer.checkin}, выезд до ${newItem.offer.checkout}` : '';
  descriptionElement.textContent = newItem.offer.description || '';
  avatarElement.src = newItem.author.avatar ? newItem.author.avatar : avatarElement.style.display = 'none';

  return element;
};

export {createCustomOffer};
