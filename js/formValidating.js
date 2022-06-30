const adForm = document.querySelector('.ad-form');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
});

//* TITLE
function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}
pristine.addValidator(adForm.querySelector('#title'), validateTitle, 'От 30 до 100 символов');

//* PRICE
function validatePrice (value) {
  return value <= 100000;
}
pristine.addValidator(adForm.querySelector('#price'), validatePrice, 'Максимум 100000');

//* GUESTROOMS

const type = adForm.querySelector('#type');
const minPrice = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000,
};

function getMinPrice () {
  const unit = type.querySelector('[name=“type”]');
  return minPrice(unit.value);
}

pristine.addValidator(type, getMinPrice, 'Ошибка');

////*

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
