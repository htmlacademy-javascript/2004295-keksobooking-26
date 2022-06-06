// Получение случайного ЦЕЛОГО числа в заданном интервале, включительно. Только положительные числа
// Источник: MDN Web Docs

function getRandomIntInclusive(min, max) {
  if (max <= min) {
    // eslint-disable-next-line no-console
    console.log('Задан неверный диапазон. Максимальное значение должно быть больше минимального.');
    return;
  }
  else if (min < 0) {
    // eslint-disable-next-line no-console
    console.log('Задан неверный диапазон. Диапазон может быть только положительный, включая ноль.');
    return;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// eslint-disable-next-line no-console
console.log(getRandomIntInclusive(2, 5));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomInt(min, max, symbolsAfterDot) {
  if (max <= min) {
    // eslint-disable-next-line no-console
    console.log('Задан неверный диапазон. Максимальное значение должно быть больше минимального.');
    return;
  }
  else if (min < 0) {
    // eslint-disable-next-line no-console
    console.log('Задан неверный диапазон. Диапазон может быть только положительный, включая ноль.');
    return;
  }
  return (min + Math.random() * (max - min)).toFixed(symbolsAfterDot);
}

// eslint-disable-next-line no-console
console.log(getRandomInt(2, 5, 3));
