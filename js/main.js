import {getMiniatures} from './api.js';
import {renderPhotoMiniature} from './photo-miniature.js';
import {showFileForm} from './form.js';
import {showFilters} from './filters.js';

const fileInput = document.querySelector('#upload-file');
const filePreview = document.querySelector('.img-upload__preview').querySelector('img');

getMiniatures()
  .then((r) => {
    renderPhotoMiniature(r);
    showFilters(r);
  });

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (!['png', 'jpg', 'jpeg'].some((suf) => file.name.toLowerCase().endsWith(suf))){
    return;
  }
  filePreview.src = URL.createObjectURL(file);
  showFileForm();
});
