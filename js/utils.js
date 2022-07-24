// Случайное ЦЕЛОЕ положительные число из переданного диапазона включительно
const getRandomPositiveInteger = (min, max) => {
  if (max <= min) {
    throw new Error('Задан неверный диапазон. Максимальное значение должно быть больше минимального.');
  }
  if (min < 0) {
    throw new Error('Задан неверный диапазон. Диапазон может быть только положительный, включая ноль.');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const submitFieldElement = document.querySelector('.ad-form__element--submit');

//Success alert
const templateSuccessFragment = document.querySelector('#success').content;
const templateSuccess = templateSuccessFragment.querySelector('.success');

const showSuccessAlert = () => {
  const successContainer = templateSuccess.cloneNode(true);
  const successElement = successContainer.querySelector('.success__message');

  successElement.style.color = 'green';
  successElement.style.fontSize = '18px';
  successElement.style.position = 'fixed';
  successElement.style.top = '15%';
  successElement.style.left = '4%';

  submitFieldElement.append(successElement);

  const escAlertClose = (evt) => {
    if (evt.key === 'Escape') {
      successElement.remove();
      document.removeEventListener('keydown', escAlertClose);
    }
  };

  document.addEventListener('keydown', escAlertClose);

  const clickAlertClose = () => {
    document.removeEventListener('click', clickAlertClose);
    successElement.remove();
  };

  document.addEventListener('click', clickAlertClose);
};

//Error alert
const templateErrorFragment = document.querySelector('#error').content;
const templateError = templateErrorFragment.querySelector('.error');

const showErrorAlert = () => {
  const errorContainer = templateError.cloneNode(true);
  const errorElement = errorContainer.querySelector('.error__message');
  const errorButton = errorContainer.querySelector('.error__button');

  errorElement.style.color = 'red';
  errorElement.style.fontSize = '18px';
  errorElement.style.position = 'fixed';
  errorElement.style.top = '15%';
  errorElement.style.left = '2%';

  submitFieldElement.innerHTML = '';
  submitFieldElement.append(errorElement);
  submitFieldElement.append(errorButton);

  const escAlertClose = (evt) => {
    if (evt.key === 'Escape') {
      errorElement.remove();
      document.removeEventListener('keydown', escAlertClose);
    }
  };

  document.addEventListener('keydown', escAlertClose);

  const clickAlertClose = () => {
    document.removeEventListener('click', clickAlertClose);
    errorElement.remove();
  };

  document.addEventListener('click', clickAlertClose);
};

export {getRandomPositiveInteger, showSuccessAlert, showErrorAlert};
