import {renderGallery} from './gallery/main.js';
import {request} from './utilities.js';
import {renderStatus} from './status.js';
import {setSubmitDisabled, resetForm} from './upload/main.js';

const baseUrl = 'https://30.javascript.pages.academy/kekstagram';

try {
  renderGallery(await request(`${baseUrl}/data`));
} catch {
  renderStatus('data-error', {autoHide: 5000});
}

document.addEventListener('formdata', async (event) => {
  try {
    setSubmitDisabled(true);
    await request(baseUrl, {method: 'post', body: event.formData});
    resetForm();
    renderStatus('success');
  } catch {
    renderStatus('error');
  } finally {
    setSubmitDisabled(false);
  }
});
