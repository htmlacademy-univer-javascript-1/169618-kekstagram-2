const bigPicture = document.querySelector('.big-picture');

bigPicture.querySelector('#picture-cancel').addEventListener('click', closeBigPicture);

const escapePressed = (ev) => ev.key === 'Escape' && closeBigPicture();

function closeBigPicture(){
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', escapePressed);
}

function generateBigPicture({url, likes, description, comments}){
  bigPicture.querySelector('.big-picture__img').children[0].src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  const commentsFragment = document.createDocumentFragment();
  for (const {avatar, message, name} of comments){
    const listElement = document.createElement('li');
    listElement.classList.add('social__comment');
    const avatarImage = document.createElement('img');
    avatarImage.classList.add('social__picture');
    avatarImage.src = avatar;
    avatarImage.alt = name;
    avatarImage.width = 35;
    avatarImage.height = 35;
    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = message;
    listElement.appendChild(avatarImage);
    listElement.appendChild(commentText);
    commentsFragment.appendChild(listElement);
  }
  bigPicture.querySelector('.social__comments').replaceChildren(commentsFragment);
  bigPicture.querySelector('.social__caption').textContent = description;
}

export function showBigPicture(picture){
  generateBigPicture(picture);
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', (ev) => escapePressed(ev));
}
