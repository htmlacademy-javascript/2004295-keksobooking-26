const filtersContainer = document.querySelector('.map__filters');

const typeFilterElement = filtersContainer.querySelector('#housing-type');
const priceFilterElement = filtersContainer.querySelector('#housing-price');
const roomsFilterElement = filtersContainer.querySelector('#housing-rooms');
const guestsFilterElement = filtersContainer.querySelector('#housing-guests');

const DEFAULT_VALUE = 'any';

const LOW_PRICE_VALUE = 10000;
const HIGH_PRICE_VALUE = 50000;

const getTypeFilterValue = (advert) => advert.offer.type === typeFilterElement.value || typeFilterElement.value === DEFAULT_VALUE;
const getRoomsFilterValue = (advert) => advert.offer.rooms === roomsFilterElement.value || roomsFilterElement.value === DEFAULT_VALUE;
const getGuestsFilterValue = (advert) => advert.offer.quests === guestsFilterElement.value || guestsFilterElement.value === DEFAULT_VALUE;

const getPriceFilterValue = (advert) => {
  const getPriceValue = () => {
    if (advert.offer.price < LOW_PRICE_VALUE) {return 'low';}
    if (advert.offer.price > HIGH_PRICE_VALUE) {return 'high';}
    if (advert.offer.price > LOW_PRICE_VALUE && advert.offer.price < HIGH_PRICE_VALUE) {return 'middle';}
  };
  return getPriceValue() === priceFilterElement.value || typeFilterElement.value === DEFAULT_VALUE;
};

// const getCheckedFeaturesValue = (advert) => {
//   const checkedFeatures = document.querySelectorAll('[name="features"]:checked');
//   const checkedFeaturesArray = Array.from(checkedFeatures).map((item) => item.value);
//   for (let i = 0; i < checkedFeaturesArray.length; i++) {
//     if (advert.offer.features === checkedFeaturesArray[i].value) {
//       return true;
//     }
//     return false;
//   }
// };

const getAdvertFilters = (advert) =>
  getRoomsFilterValue(advert) &&
  getTypeFilterValue(advert) &&
  getPriceFilterValue(advert) &&
  getGuestsFilterValue(advert);
  // getCheckedFeaturesValue();

export {getAdvertFilters};
