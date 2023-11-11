import {renderGallery} from './gallery/main.js';
import {request} from './utilities.js';
import {renderStatus} from './status.js';
import {resetForm} from './upload/main.js';
import {closePopup} from './upload/popup.js';

const baseUrl = 'https://30.javascript.pages.academy/kekstagram';

try {
  renderGallery(await request(`${baseUrl}/data`));
} catch {
  renderStatus('data-error', {autoHide: 5000});
}

document.addEventListener('formdata', (event) => {
  request(baseUrl, {
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
