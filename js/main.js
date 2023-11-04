import {createPicturesData} from './data.js';
import {renderGallery} from './gallery/main.js';
import {renderUpload} from './upload/main.js';

renderGallery(createPicturesData());

renderUpload();
