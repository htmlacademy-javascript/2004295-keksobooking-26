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

//Success alert
const templateSuccessFragment = document.querySelector('#success').content;
const templateSuccess = templateSuccessFragment.querySelector('.success');
const submitFieldElement = document.querySelector('.ad-form__element--submit');

const showSuccessAlert = () => {
  const successContainer = templateSuccess.cloneNode(true);
  const successElement = successContainer.querySelector('.success__message');

  successElement.style.color = 'green';
  successElement.style.fontSize = '20px';
  successElement.style.position = 'fixed';
  successElement.style.top = '20%';
  successElement.style.left = '5%';

  submitFieldElement.append(successElement);

  setTimeout(() => {
    successElement.remove();
  }, 3000);
};

export {getRandomPositiveInteger, showSuccessAlert};
