const adForm = document.querySelector('.ad-form');


const pristine = new Pristine(adForm, {
  // class of the parent element where the error/success class is added
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  // class of the parent element where error text element is appended
  errorTextParent: 'ad-form__element',
  // type of element to create for the error text
  errorTextTag: 'span',
  // class of the error text element
  errorTextClass: 'ad-form__error'
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

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
