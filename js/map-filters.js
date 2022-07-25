/*

const filtersContainer = document.querySelector('.map__filters');

const typeFilter = filtersContainer.querySelector('#housing-type');
const priceFilter = filtersContainer.querySelector('#housing-price');
const roomsFilter = filtersContainer.querySelector('#housing-rooms');
const guestsFilter = filtersContainer.querySelector('#housing-guests');
const featuresFilter = filtersContainer.querySelector('#housing-features');

const DEFAULT_VALUE = 'any';

const PriceRange = {
  LOW: {
    from: 0,
    to: 10000,
  },
  MIDDLE: {
    from: 10000,
    to: 50000,
  },
  HIGH: {
    from: 50000,
    to: 100000,
  },
  ANY: {
    from: 0,
    to: 100000,
  },
};

//Проверяем значение каждого feature
const getTypeFilter = (card) => card.offer.type === typeFilter.value || typeFilter.value === DEFAULT_VALUE;
const getPriceFilter = (card) => card.offer.price === priceFilter.value || priceFilter.value === DEFAULT_VALUE;
const getRoomsFilter = (card) => card.offer.rooms === roomsFilter.value || roomsFilter.value === DEFAULT_VALUE;
const getGuestsFilter = (card) => card.offer.quests === guestsFilter.value || guestsFilter.value === DEFAULT_VALUE;

const getFeaturesFilter = (card) => {
  const filteredFeatures = [];
  const checkedFeatures = featuresFilter.querySelectorAll('input:checked');

  checkedFeatures.forEach((item) => filteredFeatures.push(item.value));

  if (card.offer.features){
    return filteredFeatures.every((feature) => card.offer.features.includes(feature));
  }
  return false;
};

*/
