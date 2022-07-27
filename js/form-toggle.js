const DISABLED_FORM_CLASS = 'ad-form--disabled';

const infoFormElement = document.querySelector('.ad-form');
const filterFormElement = document.querySelector('.map__filters');
const interactiveFilterElements = filterFormElement.querySelectorAll('fieldset,select,input');
const interactiveFormElements = infoFormElement.querySelectorAll('fieldset,select,input,textarea,button');

const setDisabledAttribute = (elements) => {
  elements.forEach((element) => element.setAttribute('disabled', true));
};

const removeDisabledAttribute = (elements) => {
  elements.forEach((element) => element.removeAttribute('disabled'));
};

const makeFormDisabled = () => {
  infoFormElement.classList.add(DISABLED_FORM_CLASS);
  filterFormElement.classList.add(DISABLED_FORM_CLASS);

  setDisabledAttribute(interactiveFormElements);
  setDisabledAttribute(interactiveFilterElements);
};

const makeFormActive = () => {
  infoFormElement.classList.remove(DISABLED_FORM_CLASS);
  filterFormElement.classList.remove(DISABLED_FORM_CLASS);

  removeDisabledAttribute(interactiveFormElements);
  removeDisabledAttribute(interactiveFilterElements);
};

export {makeFormDisabled, makeFormActive};
