const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element--error',
}, true);

//Валидация поля «Тип жилья» в зависимости от поля «Цена за ночь»:
const typeFieldElement = adForm.querySelector('#type'); //Поле 'тип жилья'
const priceFieldElement = adForm.querySelector('#price'); //Поле 'цена'
const minPrice = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

const validatePrice = () => {
  const typeValue = typeFieldElement.value; //Выбранный тип жилья
  const priceValue = minPrice[typeValue]; //Берем значение из minPrice

  return priceFieldElement.value >= priceValue;
};

const getPriceErrorMessage = () => `Введите цену больше ${minPrice[typeFieldElement.value]}`;

pristine.addValidator(priceFieldElement, validatePrice, getPriceErrorMessage);

const onTypeChange = () => {
  priceFieldElement.setAttribute('min', minPrice[typeFieldElement.value]);
  priceFieldElement.placeholder = minPrice[typeFieldElement.value];
  pristine.validate(priceFieldElement);
};

adForm.addEventListener('change', onTypeChange);

//Валидация checkin и checkout (синхронизация)
const timeinElement = adForm.querySelector('#timein');
const timeoutElement = adForm.querySelector('#timeout');

timeinElement.addEventListener('change', () => {
  timeoutElement.value = timeinElement.value;
});

timeoutElement.addEventListener('change', () => {
  timeinElement.value = timeoutElement.value;
});

//Валидация roomFieldElement
const roomFieldElement = adForm.querySelector('#room_number'); // Количество комнат
const capacityFieldElement = adForm.querySelector('#capacity'); //Количество гостей

const validateRoom = () => {
  const currentRoomValue = parseInt(roomFieldElement.value, 10); //Выбранное количество комнат
  const currentCapacityValue = parseInt(capacityFieldElement.value, 10); //Выбранное количество гостей

  if (currentCapacityValue === 0 || currentRoomValue === 100) {
    return currentCapacityValue === 0 && currentRoomValue === 100;
  }
  return currentRoomValue >= currentCapacityValue;
};

pristine.addValidator(roomFieldElement, validateRoom, 'Измените количество комнат/гостей');

adForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

adForm.addEventListener('reset', () => {
  pristine.reset();
});
