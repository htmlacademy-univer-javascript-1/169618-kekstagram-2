import {generatePublication, PHOTOS_NUMBER} from './data.js';
import {renderPhotoMiniature} from './photo-miniature.js';

const publications = Array.from({length: PHOTOS_NUMBER},generatePublication);
renderPhotoMiniature(publications);
// console.log(publications);
