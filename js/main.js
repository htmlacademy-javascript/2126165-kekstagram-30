import {renderGallery} from './gallery/main.js';
import {request} from './utilities.js';
import {renderStatus} from './status.js';
import {resetForm} from './upload/main.js';
import {closePopup} from './upload/popup.js';

const GET_URL = 'https://30.javascript.pages.academy/kekstagram/data';
const SEND_URL = 'https://30.javascript.pages.academy/kekstagram';

request(GET_URL, {
  method: 'GET'
})
  .then((data) => renderGallery(data))
  .catch(() => renderStatus('data-error'));

document.addEventListener('formdata', (event) => {
  request(SEND_URL, {
    method: 'POST',
    body: event.formData
  })
    .then(() => {
      renderStatus('success');
      resetForm();
      closePopup();
    })
    .catch(() => renderStatus('error'));
});
