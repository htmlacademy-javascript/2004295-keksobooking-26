const adForm = document.querySelector('.ad-form');
const typeFieldElement = adForm.querySelector('#type'); //Поле 'Тип жилья'
const priceFieldElement = adForm.querySelector('#price'); //Поле 'Цена'
const timeinElement = adForm.querySelector('#timein'); //Поле 'Время заезда'
const timeoutElement = adForm.querySelector('#timeout'); //Поле 'Время выезда'
const roomFieldElement = adForm.querySelector('#room_number'); //Поле 'Количество комнат'
const capacityFieldElement = adForm.querySelector('#capacity'); //Поле 'Количество мест'

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element--error',
}, true);

//Зависимость поля «Цена за ночь» от поля «Тип жилья»:
const minPrice = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

const validatePrice = () => {
  const priceValue = minPrice[typeFieldElement.value]; //Берем значение из minPrice
  return priceFieldElement.value >= priceValue;
};

const getPriceErrorMessage = () => `Введите цену больше ${minPrice[typeFieldElement.value]}`;

pristine.addValidator(priceFieldElement, validatePrice, getPriceErrorMessage);

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

//Валидация checkin и checkout (синхронизация)
// timeinElement.addEventListener('change', () => {
//   timeoutElement.value = timeinElement.value;
// });

// timeoutElement.addEventListener('change', () => {
//   timeinElement.value = timeoutElement.value;
// });

//Валидация roomFieldElement
const validateRoom = () => {
  const currentRoomValue = parseInt(roomFieldElement.value, 10); //Выбранное количество комнат
  const currentCapacityValue = parseInt(capacityFieldElement.value, 10); //Выбранное количество гостей

  if (currentCapacityValue === 0 || currentRoomValue === 100) {
    return currentCapacityValue === 0 && currentRoomValue === 100;
  }
  return currentRoomValue >= currentCapacityValue;
};

pristine.addValidator(roomFieldElement, validateRoom, 'Измените количество комнат/гостей');
pristine.addValidator(capacityFieldElement, validateRoom, 'Измените количество комнат/гостей');

adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

adForm.addEventListener('reset', () => {
  pristine.reset();
});
