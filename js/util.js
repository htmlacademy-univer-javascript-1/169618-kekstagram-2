// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomPositiveInteger (from,to) {
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
function getRandomElement(arr) {
  return arr[getRandomPositiveInteger(0, arr.length - 1)];
}

function getCloseListeners(modal, closeButton, callback){
  const closeOnEscape = (evt) => evt.key === 'Escape' && closeModal();
  function closeModal(){
    if (callback){
      callback();
    }
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeOnEscape);
    closeButton.removeEventListener('click', closeModal);
  }
  return [closeModal, closeOnEscape];
}

// Функция для проверки максимальной длины строки
function isCorrectLength(str, maxLength) {
  if (typeof str !== 'string') {
    throw new RangeError('Значение str должно быть строкой');
  }
  return str.length <= maxLength;
}

// Функция возвращающая введённую строку, удаляя все пробелы в конце
function trimString(field) {
  field.value = field.value.trimEnd();
}

function transformFromHundredProcent(value, max, min, fixed) {
  return ((value / 100) * (max - min) + min).toFixed(fixed);
}

export{getRandomPositiveInteger, getRandomElement, getCloseListeners, isCorrectLength, trimString, transformFromHundredProcent};
