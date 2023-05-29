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
function useOnEscape(elem, callback, prioritise) {

  const action = (ev) => document.body.classList.toString().split(' ')
    .filter((p) => p.startsWith('modal-prioritise'))
    .map((p) => +p.slice(17))
    .filter((p) => p > prioritise).length === 0 &&
    ev.key === 'Escape' &&
    callback();
  const setEvent = () => {
    document.addEventListener('keydown', action);
    document.body.classList.add(`modal-prioritise-${prioritise}`);
  };
  const removeEvent = () => {
    document.removeEventListener('keydown', action);
    setTimeout(() => document.body.classList.remove(`modal-prioritise-${prioritise}`), 300);
  };
  return [setEvent, removeEvent];
}

export function getCloseListeners(modal, closeButton, callback) {
  const closeOnEscape = (ev) => document.body.classList.toString().split(' ')
    .filter((p) => p.startsWith('modal-prioritise'))
    .map((p) => +p.slice(17))
    .filter((p) => p > 1).length === 0 &&
    ev.key === 'Escape' && closeModal();

  function closeModal() {
    if (callback) {
      callback();
    }
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.body.classList.remove('modal-prioritise-1');
    document.body.removeEventListener('keydown', closeOnEscape);
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

function stopPropagation(evt) {
  evt.stopPropagation();
}

function useCloseOnClickOutside(curElem, action) {
  const setEvent = () => {
    document.addEventListener('click', action);
    curElem.addEventListener('click', stopPropagation);
  };
  const removeEvent = () => {
    document.removeEventListener('click', action);
    curElem.removeEventListener('click', stopPropagation);
  };
  return [setEvent, removeEvent];
}

export{getRandomPositiveInteger, getRandomElement, useOnEscape, isCorrectLength, trimString, transformFromHundredProcent, stopPropagation, useCloseOnClickOutside};
