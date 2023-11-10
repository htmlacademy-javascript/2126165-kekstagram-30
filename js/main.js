import {renderGallery} from './gallery/main.js';
import {request} from './utilities.js';

const GET_URL = 'https://30.javascript.pages.academy/kekstagram/data';
const SEND_URL = 'https://30.javascript.pages.academy/kekstagram';

request(GET_URL, {
  method: 'GET'
})
  .then((data) => renderGallery(data));
