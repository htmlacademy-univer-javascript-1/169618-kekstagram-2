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

function getCloseListeners(modal, closeButton, callback) {
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

function isCorrectLength(str, maxLength) {
  if (typeof str !== 'string') {
    throw new RangeError('Значение str должно быть строкой');
  }
  return str.length <= maxLength;
}

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

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
export{getRandomPositiveInteger, getRandomElement, useOnEscape, getCloseListeners,
  isCorrectLength, trimString, transformFromHundredProcent, stopPropagation, useCloseOnClickOutside, debounce};
