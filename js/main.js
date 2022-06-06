// Получение случайного ЦЕЛОГО числа в заданном интервале, включительно. Только положительные числа
// Источник: MDN Web Docs

function getRandomIntInclusive(min, max) {
  if (max <= min) {
    return min;
  }
  else if (min < 0) {
    while (min < 0) {
      min++;
    }
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(-2, 2);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomInt(min, max, symbolsAfterDot) {
  if (max <= min) {
    return min.toFixed(symbolsAfterDot);
  }
  else if (min < 0) {
    while (min < 0) {
      min++;
    }
  }
  return (min + Math.random() * (max - min)).toFixed(symbolsAfterDot);
}

getRandomInt(2, 5, 3);
