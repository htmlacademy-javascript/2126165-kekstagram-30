import {createPicturesData} from '../data.js';
import {renderThumbnails} from './thumbnails.js';
import {onThumbnailClick} from './popup.js';

renderThumbnails(createPicturesData());
onThumbnailClick();
