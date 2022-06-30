const makeFormDisabled = () => {
  const infoFormElement = document.querySelector('.ad-form');
  const interactiveformElements = infoFormElement.querySelectorAll('fieldset,select,input,textarea,button');
  const filterFormElement = document.querySelector('.map__filters');

  infoFormElement.classList.add('ad-form--disabled');
  filterFormElement.classList.add('ad-form--disabled');

  interactiveformElements.forEach((element) =>
    element.setAttribute('disabled', true)
  );
};

const makeFormActive = () => {
  const infoFormElement = document.querySelector('.ad-form');
  const interactiveformElements = infoFormElement.querySelectorAll('fieldset,select,input,textarea,button');
  const filterFormElement = document.querySelector('.map__filters');

  infoFormElement.classList.remove('ad-form--disabled');
  filterFormElement.classList.remove('ad-form--disabled');

  interactiveformElements.forEach((element) =>
    element.removeAttribute('disabled')
  );
};

export {makeFormDisabled, makeFormActive};
