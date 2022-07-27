import {sendData} from './api.js';
import {mapReset} from './map.js';
import {sliderReset} from './nouislider.js';
import {resetUpload} from './pictures-upload.js';
import {onSuccessAlert, onErrorAlert} from './utils.js';

const minPrice = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

const minRoomsPriceValue = '1';
const maxRoomsPriceValue = '100';

const filtersContainer = document.querySelector('.map__filters');
const adForm = document.querySelector('.ad-form');
const typeFieldElement = adForm.querySelector('#type');
const priceFieldElement = adForm.querySelector('#price');
const timeinElement = adForm.querySelector('#timein');
const timeoutElement = adForm.querySelector('#timeout');
const roomFieldElement = adForm.querySelector('#room_number');
const capacityFieldElement = adForm.querySelector('#capacity');
const submitButton = document.querySelector('.ad-form__submit');
const resetButton = document.querySelector('.ad-form__reset');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element--error',
}, true);

const validatePrice = () => {
  const priceValue = minPrice[typeFieldElement.value]; //Берем значение из minPrice
  return priceFieldElement.value >= priceValue;
};

const getPriceErrorMessage = () => `Введите цену больше ${minPrice[typeFieldElement.value]}`;

const validateRoom = () => {
  const currentRoomValue = Number(roomFieldElement.value); //Выбранное количество комнат
  const currentCapacityValue = Number(capacityFieldElement.value); //Выбранное количество гостей
  if (currentCapacityValue === 0 || currentRoomValue === Number(maxRoomsPriceValue)) {
    return currentCapacityValue === 0 && currentRoomValue === Number(maxRoomsPriceValue);
  }
  return currentRoomValue >= currentCapacityValue;
};

const getRoomErrorMessage = () => {
  if (Number(roomFieldElement.value) === Number(minRoomsPriceValue)) {
    return 'Не более 1 гостя';
  } else if (Number(roomFieldElement.value) === Number(maxRoomsPriceValue)) {
    return 'Не для гостей';
  }
  return `Не более ${roomFieldElement.value} гостей`;
};

const onChange = (evt) => {
  if (evt.target === typeFieldElement) {
    priceFieldElement.setAttribute('min', minPrice[typeFieldElement.value]);
    priceFieldElement.placeholder = minPrice[typeFieldElement.value];
    pristine.validate(priceFieldElement);
  }
  //Синхронизация timein и timeout
  if (evt.target === timeinElement) {
    timeoutElement.value = timeinElement.value;
  }
  if (evt.target === timeoutElement) {
    timeinElement.value = timeoutElement.value;
  }
};

adForm.addEventListener('change', onChange);

pristine.addValidator(priceFieldElement, validatePrice, getPriceErrorMessage);
pristine.addValidator(roomFieldElement, validateRoom, getRoomErrorMessage);

const onResetForm = () => {
  adForm.reset();
  pristine.reset();
  filtersContainer.reset();
};

const onSubmitSuccess = () => {
  onSuccessAlert();
  onResetForm();
  resetUpload();
  sliderReset();
  mapReset();
  submitButton.disabled = false;
};

const onSubmitError = () => {
  onErrorAlert();
  submitButton.disabled = false;
};

adForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  evt.preventDefault();

  if (isValid) {
    submitButton.disabled = true;
    const formData = new FormData(evt.target);
    sendData(formData, onSubmitSuccess, onSubmitError);
  }
});

resetButton.addEventListener('click', () => {
  pristine.reset();
  onResetForm();
  resetUpload();
  mapReset();
});
