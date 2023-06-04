import {getMiniatures} from './api.js';
import {renderPhotoMiniature} from './photo-miniature.js';
import {showFileForm} from './form.js';
import {showFilters} from './filters.js';

getMiniatures()
  .then((r) => {
    renderPhotoMiniature(r);
    return r;
  })
  .then(showFilters);

document.querySelector('#upload-file').addEventListener('change', showFileForm);
