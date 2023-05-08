import {generatePublications} from './data.js';

const similarPictureElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');

export function insertPhotoMiniature() {
  const similarPictureFragment = document.createDocumentFragment();
  for (const {url, comments, likes} of generatePublications) {
    const picture = pictureTemplate.cloneNode(true).content;
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likes;
    similarPictureFragment.appendChild(picture);
  }

  similarPictureElement.appendChild(similarPictureFragment);
}
