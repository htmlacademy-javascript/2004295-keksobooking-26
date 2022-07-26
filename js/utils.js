const submitFieldElement = document.querySelector('.ad-form__element--submit');
const templateSuccessFragment = document.querySelector('#success').content;
const templateSuccessElement = templateSuccessFragment.querySelector('.success');
const templateErrorFragment = document.querySelector('#error').content;
const templateErrorElement = templateErrorFragment.querySelector('.error');

const onSuccessAlert = () => {
  const successContainer = templateSuccessElement.cloneNode(true);
  const successElement = successContainer.querySelector('.success__message');

  successElement.style.color = 'green';
  successElement.style.fontSize = '18px';
  successElement.style.position = 'fixed';
  successElement.style.top = '15%';
  successElement.style.left = '4%';

  submitFieldElement.append(successElement);

  const onEscAlertClose = (evt) => {
    if (evt.key === 'Escape') {
      successElement.remove();
      document.removeEventListener('keydown', onEscAlertClose);
    }
  };

  document.addEventListener('keydown', onEscAlertClose);

  const onClickAlertClose = () => {
    document.removeEventListener('click', onClickAlertClose);
    successElement.remove();
  };

  document.addEventListener('click', onClickAlertClose);
};

//Error alert

const onErrorAlert = (errorText = 'Не удалось отправить данные') => {
  const errorContainer = templateErrorElement.cloneNode(true);
  const errorElement = errorContainer.querySelector('.error__message');
  const errorButton = errorContainer.querySelector('.error__button');

  errorElement.textContent = errorText;

  errorElement.style.color = 'red';
  errorElement.style.fontSize = '18px';
  errorElement.style.position = 'fixed';
  errorElement.style.top = '15%';
  errorElement.style.left = '2%';

  submitFieldElement.innerHTML = '';
  submitFieldElement.append(errorElement);
  submitFieldElement.append(errorButton);

  const onEscAlertClose = (evt) => {
    if (evt.key === 'Escape') {
      errorElement.remove();
      document.removeEventListener('keydown', onEscAlertClose);
    }
  };

  document.addEventListener('keydown', onEscAlertClose);

  const onClickAlertClose = () => {
    document.removeEventListener('click', onClickAlertClose);
    errorElement.remove();
  };

  document.addEventListener('click', onClickAlertClose);
};

//Debounce
const debounce = (cb, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, rest), timeoutDelay);
  };
};

export {onSuccessAlert, onErrorAlert, debounce};
