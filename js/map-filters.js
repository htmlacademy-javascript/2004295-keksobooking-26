/*
const DEFAULT_VALUE = 'any';

const filtersContainer = document.querySelector('.map__filters');

const getCardRank = (card) => {
  const typeFilterElement = filtersContainer.querySelector('#housing-type');
  const priceFilterElement = filtersContainer.querySelector('#housing-price');
  const roomsFilterElement = filtersContainer.querySelector('#housing-rooms');
  const capacityFilterElement = filtersContainer.querySelector('#housing-guests');

  let rank = 0;

  if (card.offer.type === (typeFilterElement.value || DEFAULT_VALUE)) {
    rank += 1;
  }
  if (card.offer.price === (priceFilterElement.value || DEFAULT_VALUE)) {
    rank += 1;
  }
  if (card.offer.rooms === (roomsFilterElement.value || DEFAULT_VALUE)) {
    rank += 1;
  }
  if (card.offer.guests === (capacityFilterElement.value || DEFAULT_VALUE)) {
    rank += 1;
  }

  return rank;
};

const compareCards = (type, price, rooms, guests) => {
  const rankType = getCardRank(type);
  const rankPrice = getCardRank(price);
  const rankRooms = getCardRank(rooms);
  const rankGuests = getCardRank(guests);

  return rankGuests - rankRooms - rankPrice - rankType;
}
*/
