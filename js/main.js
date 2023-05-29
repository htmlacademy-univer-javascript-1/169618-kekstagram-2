import {getMiniatures} from './api.js';
import {renderPhotoMiniature} from './photo-miniature.js';
import {showFileForm} from './form.js';

getMiniatures()
  .then(renderPhotoMiniature);

document.querySelector('#upload-file').addEventListener('change', showFileForm);
