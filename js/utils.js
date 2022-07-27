const DEFAULT_TIMEOUT_DELAY = '500';

const submitFieldElement = document.querySelector('.ad-form__element--submit');
const templateSuccessFragment = document.querySelector('#success').content;
const templateSuccessElement = templateSuccessFragment.querySelector('.success');
const templateErrorFragment = document.querySelector('#error').content;
const templateErrorElement = templateErrorFragment.querySelector('.error');

const onSuccessAlert = () => {
  const successContainer = templateSuccessElement.cloneNode(true);

  submitFieldElement.append(successContainer);

  const onEscAlertClose = (evt) => {
    if (evt.key === 'Escape') {
      successContainer.remove();
      document.removeEventListener('keydown', onEscAlertClose);
    }
  };

  document.addEventListener('keydown', onEscAlertClose);

  const onClickAlertClose = () => {
    document.removeEventListener('click', onClickAlertClose);
    successContainer.remove();
  };

  document.addEventListener('click', onClickAlertClose);
};

//Error alert

const onErrorAlert = (errorText = 'Не удалось отправить данные') => {
  const errorContainer = templateErrorElement.cloneNode(true);
  const errorElement = errorContainer.querySelector('.error__message');
  const errorButton = errorContainer.querySelector('.error__button');

  errorElement.textContent = errorText;

  submitFieldElement.innerHTML = '';
  submitFieldElement.append(errorContainer);
  submitFieldElement.append(errorButton);

  const onEscAlertClose = (evt) => {
    if (evt.key === 'Escape') {
      errorContainer.remove();
      document.removeEventListener('keydown', onEscAlertClose);
    }
  };

  document.addEventListener('keydown', onEscAlertClose);

  const onClickAlertClose = () => {
    document.removeEventListener('click', onClickAlertClose);
    errorContainer.remove();
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
