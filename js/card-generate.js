const templateFragment = document.querySelector('#card').content;
const template = templateFragment.querySelector('.popup');

const translateType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const createCustomCard = (card) => {
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
  const featuresArray = card.offer.features;

  if (featuresArray) {
    featuresListElement.forEach((feature) => {
      if (!featuresArray.includes(feature.dataset.type)) {
        feature.remove();
      }
    });
  } else {
    featuresContainerElement.innerHTML = '';
  }

  // offer.type
  const typeEng = card.offer.type || '';
  typeElement.textContent = translateType[typeEng] || '';

  // offer.photos
  const photosArray = card.offer.photos;
  photosContainerElement.innerHTML = '';
  if (photosArray) {
    photosArray.forEach((photo) => {
      const clonedPhotoElement = photoElement.cloneNode(true);
      photosContainerElement.insertAdjacentElement('beforeend', clonedPhotoElement);
      clonedPhotoElement.src = photo;
    });
  }

  titleElement.textContent = card.offer.title || '';
  addressElement.textContent = card.offer.address || '';
  priceElement.innerHTML = card.offer.price ? `${card.offer.price  }<span>₽/ночь</span>` : '';
  guestRoomsElement.textContent = card.offer.rooms && card.offer.guests ? `${card.offer.rooms} комнаты для ${card.offer.guests} гостей` : '';
  timeCheckElement.textContent = card.offer.checkin && card.offer.checkout ? `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}` : '';
  descriptionElement.textContent = card.offer.description || '';
  avatarElement.src = card.author.avatar ? card.author.avatar : avatarElement.style.display = 'none';

  return element;
};

export {createCustomCard};
