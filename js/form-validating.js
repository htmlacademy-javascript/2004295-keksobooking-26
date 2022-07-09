import {showSuccessAlert} from './util.js';

const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element--error',
}, true);

const typeFieldElement = adForm.querySelector('#type');
const priceFieldElement = adForm.querySelector('#price');
const timeinElement = adForm.querySelector('#timein');
const timeoutElement = adForm.querySelector('#timeout');
const roomFieldElement = adForm.querySelector('#room_number');
const capacityFieldElement = adForm.querySelector('#capacity');

//Зависимость поля «Цена за ночь» от поля «Тип жилья»:
const minPrice = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

//Валидация priceFieldElement
const validatePrice = () => {
  const priceValue = minPrice[typeFieldElement.value]; //Берем значение из minPrice
  return priceFieldElement.value >= priceValue;
};

const getPriceErrorMessage = () => `Введите цену больше ${minPrice[typeFieldElement.value]}`;

//Валидация roomFieldElement
const validateRoom = () => {
  const currentRoomValue = parseInt(roomFieldElement.value, 10); //Выбранное количество комнат
  const currentCapacityValue = parseInt(capacityFieldElement.value, 10); //Выбранное количество гостей
  if (currentCapacityValue === 0 || currentRoomValue === 100) {
    return currentCapacityValue === 0 && currentRoomValue === 100;
  }
  return currentRoomValue >= currentCapacityValue;
};

const getRoomErrorMessage = () => {
  if (parseInt(roomFieldElement.value, 10) === 1) {
    return 'Не более 1 гостя';
  } else if (parseInt(roomFieldElement.value, 10) === 100) {
    return 'Не для гостей';
  }
  return `Не более ${roomFieldElement.value} гостей`;
};

//События при "change"
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

adForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  evt.preventDefault();

  if (isValid) {
    const formData = new FormData(evt.target);

    fetch(
      'https://26.javascript.pages.academy/kksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          showSuccessAlert();
        } else {
          // eslint-disable-next-line no-console
          console.log('Не удалось отправить форму. Попробуйте ещё раз');
        }
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('Не удалось отправить форму. Попробуйте ещё раз');
      });
  }
});

adForm.addEventListener('reset', () => {
  pristine.reset();
});
