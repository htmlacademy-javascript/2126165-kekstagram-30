import {openPopup} from './popup.js';
import {validateForm, resetForm} from './validation.js';

const form = document.querySelector('.img-upload__form');

form.addEventListener('change', (event) => {
  if (event.target.name === 'filename') { //TODO Добавить оператор switch
    openPopup();
  }
});

form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

form.addEventListener('reset', () => {
  resetForm();
});
