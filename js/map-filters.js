/*
const filtersContainer = document.querySelector('.map__filters');

const typeFilterElement = filtersContainer.querySelector('#housing-type');
const priceFilterElement = filtersContainer.querySelector('#housing-price');
const roomsFilterElement = filtersContainer.querySelector('#housing-rooms');
const guestsFilterElement = filtersContainer.querySelector('#housing-guests');

const DEFAULT_VALUE = 'any';

const lowPriceValue = priceFilterElement.value === 'low';
const highPriceValue = priceFilterElement.value === 'high';
const middlePriceValue = priceFilterElement.value === 'middle';

//Узнаем значение выбранного feature в фильтре
const getTypeFilterValue = (card) => card.offer.type === typeFilterElement.value || typeFilterElement.value === DEFAULT_VALUE;
const getPriceFilterValue = (card) => card.offer.price === priceFilterElement.value || priceFilterElement.value === DEFAULT_VALUE;
const getRoomsFilterValue = (card) => card.offer.rooms === roomsFilterElement.value || roomsFilterElement.value === DEFAULT_VALUE;
const getGuestsFilterValue = (card) => card.offer.quests === guestsFilterElement.value || guestsFilterElement.value === DEFAULT_VALUE;

const getCheckedFeatures = () => {
  const checkedFeatures = document.querySelectorAll('[name="features"]:checked');
  const checkedFeaturesArray = Array.from(checkedFeatures).map((item) => item.value);

  return checkedFeaturesArray;
};
*/
