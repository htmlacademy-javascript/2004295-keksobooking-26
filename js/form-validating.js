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
