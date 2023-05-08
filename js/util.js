// Функция, возвращающая случайное целое число из переданного диапазона включительно
export function getRandomInteger (from,to) {
  let fromTemp = from;
  let toFrom = to;
  if (from < 0 || to < 0) {
    throw new RangeError('Числа должны быть положительными');
  }
  if (isNaN(from) || isNaN(to)) {
    throw new RangeError('Значения должны быть числами');
  }
  if (from === to) {
    return from;
  }
  if (from > to) {
    fromTemp = to;
    toFrom = from;
  }
  return Math.round(Math.random() * (toFrom - fromTemp) + fromTemp);
}

// Функция, возвращающая случайный элемент массива
export const getRandomElement = (arr) => arr[getRandomInteger(0, arr.length - 1)];

// Функция для проверки максимальной длины строки
export const validateFormLength = (str, maxLength) => {
  if (typeof str !== 'string') {
    throw new RangeError('Значение str должно быть строкой');
  }
  return str.length <= maxLength;
};
