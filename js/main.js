// Получение случайного ЦЕЛОГО числа в заданном интервале, включительно. Только положительные числа
// Источник: MDN Web Docs

function getRandomIntInclusive(min, max) {
  if (max <= min) {
    throw new Error('Задан неверный диапазон. Максимальное значение должно быть больше минимального.');
  }
  else if (min < 0) {
    // eslint-disable-next-line no-console
    throw new Error('Задан неверный диапазон. Диапазон может быть только положительный, включая ноль.');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(2, 5);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomInt(min, max, symbolsAfterDot) {
  if (max <= min) {
    // eslint-disable-next-line no-console
    throw new Error('Задан неверный диапазон. Максимальное значение должно быть больше минимального.');
  }
  else if (min < 0) {
    // eslint-disable-next-line no-console
    throw new Error('Задан неверный диапазон. Диапазон может быть только положительный, включая ноль.');
  }
  return +((min + Math.random() * (max - min)).toFixed(symbolsAfterDot));
}

getRandomInt(2, 5, 3);

