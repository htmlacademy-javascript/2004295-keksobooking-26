const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__element--error',
});

//* TITLE
function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}
pristine.addValidator(adForm.querySelector('#title'), validateTitle, 'От 30 до 100 символов');

//* PRICE
const maxPrice = 100000;
function validatePrice (value) {
  return value <= maxPrice;
}
pristine.addValidator(adForm.querySelector('#price'), validatePrice, `Максимум ${maxPrice}`);

//*GUESTROOMS
const roomFieldElement = adForm.querySelector('#room_number'); // Количество комнат
const capacityFieldElement = adForm.querySelector('#capacity'); //Количество гостей

//Проверяем соответствие
const validateRoom = () => {
  const currentRoomValue = parseInt(roomFieldElement.value, 10); //Выбранное количество комнат
  const currentCapacityValue = parseInt(capacityFieldElement.value, 10); //Выбранное количество гостей

  if (currentCapacityValue === 0 || currentRoomValue === 100) {
    return currentCapacityValue === 0 && currentRoomValue === 100;
  }
  return currentRoomValue >= currentCapacityValue;
};

pristine.addValidator(roomFieldElement, validateRoom, 'Ошибочка');

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
