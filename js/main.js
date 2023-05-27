import {generatePublication, PHOTOS_NUMBER} from './data.js';
import {renderPhotoMiniature} from './photo-miniature.js';
import {showFileForm} from './form.js';

const publications = Array.from({length: PHOTOS_NUMBER},generatePublication);
renderPhotoMiniature(publications);

document.querySelector('#upload-file').addEventListener('change', showFileForm);
