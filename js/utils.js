const DEFAULT_TIMEOUT_DELAY = '500';

const submitFieldElement = document.querySelector('.ad-form__element--submit');
const templateSuccessFragment = document.querySelector('#success').content;
const templateSuccessElement = templateSuccessFragment.querySelector('.success');
const templateErrorFragment = document.querySelector('#error').content;
const templateErrorElement = templateErrorFragment.querySelector('.error');

const onSuccessAlert = () => {
  const successTemplate = templateSuccessElement.cloneNode(true);

  submitFieldElement.append(successTemplate);

  const onEscAlertClose = (evt) => {
    if (evt.key === 'Escape') {
      successTemplate.remove();
      document.removeEventListener('keydown', onEscAlertClose);
    }
  };

  document.addEventListener('keydown', onEscAlertClose);

  const onClickAlertClose = () => {
    document.removeEventListener('click', onClickAlertClose);
    successTemplate.remove();
  };

  document.addEventListener('click', onClickAlertClose);
};

//Error alert

const onErrorAlert = (errorText = 'Не удалось отправить данные') => {
  const errorTemplate = templateErrorElement.cloneNode(true);
  const errorElement = errorTemplate.querySelector('.error__message');
  const errorButton = errorTemplate.querySelector('.error__button');

  errorElement.textContent = errorText;

  submitFieldElement.innerHTML = '';
  submitFieldElement.append(errorTemplate);
  submitFieldElement.append(errorButton);

  const onEscAlertClose = (evt) => {
    if (evt.key === 'Escape') {
      errorTemplate.remove();
      document.removeEventListener('keydown', onEscAlertClose);
    }
  };

  document.addEventListener('keydown', onEscAlertClose);

  const onClickAlertClose = () => {
    document.removeEventListener('click', onClickAlertClose);
    errorTemplate.remove();
  };

  document.addEventListener('click', onClickAlertClose);
};

//Debounce
const debounce = (cb, timeoutDelay = DEFAULT_TIMEOUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, rest), timeoutDelay);
  };
};

export {onSuccessAlert, onErrorAlert, debounce};
