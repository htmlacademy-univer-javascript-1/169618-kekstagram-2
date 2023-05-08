import {getRandomInteger,getRandomElement} from './util.js';

// Генерация публикации
const PHOTOS_NUMBER = 25;

const DESCRIPTIONS = [
  'Мотивация на понедельник? Я мотивирован 7 дней в неделю.',
  'Лучшая тренировка - это бег на короткие дистанции. От холодильника к дивану, например.',
  'Все мы рождаемся немного странными, некоторые просто не меняются.',
  'Похоже у меня аллергия на утро.',
  'Бегаю ли я по утрам? Нет, потому что боюсь, что не смогу остановиться и убегу из страны.',
  'Я перевела телефон в режим самолёта, но он так и не взлетел.',
  'Привет, тут должна быть забавная или умная цитата. Надеюсь, тебе понравилась!',
  'Табличка сарказм',
  'Если бы я была посмешнее, то и подпись была интересная.',
  'Когда я начинаю следовать своим мечтам, то иду спать.',
  'Время перемен.',
  'Счастье – это путь, а не судьба.',
  'Парни, чо свучивось?.',
  'Мы должны ценить каждый момент.',
  'Любите так, как будто вас никогда не ранили.',
  'Должное придёт, случившееся неизменно.',
  'Всё, чего не пожелаем, дано нам будет.',
  'Моя мавышка <3',
  'Умение отпускать упрощает жизнь.',
  'Никогда ничего не поздно',
  'А что так можно было!?',
  'Делай, что должен, и будь, что будет.',
  'Вино, само себя не выпьет!',
  'Только мне известно, на что я способна.',
  'От любви, до ненависти…(сами закончите)',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['ZXC_Petya_ZXC', 'Вася228', 'Митя', 'Л@шуня', 'Иля', 'Максут', 'Лясик', 'Лизя', 'Абобий', 'Ростик', 'Асуна'];

const COMMENTS_ID = [];

const getId = (() => {
  let id = 1;
  return () => id++;
})();

function getCommentId() {
  let id = getRandomInteger(1, 300);
  while (COMMENTS_ID.includes(id)) {
    id = getRandomInteger(1, 300);
  }
  return id;
}

function generateComment() {
  const messagesText = [];
  for (let i = 0; i < getRandomInteger(1, 2); i++) {
    messagesText.push(getRandomElement(MESSAGES));
  }
  return {
    id: getCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: messagesText.join(' '),
    name: getRandomElement(NAMES)
  };
}

function generatePublication() {
  const commentsText = Array.from({length: getRandomInteger(0, 5)}, generateComment);
  const id = getId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[id - 1],
    likes: getRandomInteger(15,200),
    comments: commentsText
  };
}
const publications = Array.from({length: PHOTOS_NUMBER}, () => generatePublication());

export {publications};
