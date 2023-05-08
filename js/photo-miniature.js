import {generatePublications} from './data.js';
import {showBigPicture} from './photo-full.js';

const pictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');

export function insertPhotoMiniature() {
  const pictureFragment = document.createDocumentFragment();
  for (const info of generatePublications) {
    const picture = pictureTemplate.cloneNode(true).content;
    picture.querySelector('.picture__img').src = info.url;
    picture.querySelector('.picture__img').addEventListener('click', (ev) => {
      ev.preventDefault();
      showBigPicture(info);
    });
    picture.querySelector('.picture__likes').textContent = info.likes;
    picture.querySelector('.picture__comments').textContent = info.comments.length;
    pictureFragment.appendChild(picture);
  }

  pictureElement.appendChild(pictureFragment);
}
