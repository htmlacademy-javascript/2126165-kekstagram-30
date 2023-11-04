import {openPopup} from './popup.js';
import {validateForm, resetForm} from './validation.js';

const form = document.querySelector('.img-upload__form');
const pictureUpload = document.querySelector('.img-upload__input');

const renderUpload = () => {

  pictureUpload.addEventListener('change', () => {
    openPopup();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
  });

  form.addEventListener('reset', () => {
    resetForm();
  });
};

export {renderUpload};
