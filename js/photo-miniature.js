import {showBigPicture} from './photo-full.js';

const picturesContainer = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture');

function renderPhotoMiniature(publicationsInfo){
  const picturesFragment = document.createDocumentFragment();
  publicationsInfo.forEach((info) => {
    const picture = picturesTemplate.cloneNode(true).content;
    picture.querySelector('.picture__img').src = info.url;
    picture.querySelector('.picture').addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPicture(info);
    });
    picture.querySelector('.picture__likes').textContent = info.likes;
    picture.querySelector('.picture__comments').textContent = info.comments.length;
    picturesFragment.appendChild(picture);
  });
  picturesContainer.appendChild(picturesFragment);
}

export {renderPhotoMiniature};
