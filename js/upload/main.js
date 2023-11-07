import {openPopup} from './popup.js';
import {validateForm, resetForm} from './validation.js';
import {onSmallerClick, onBiggerClick} from './scale.js';
import {renderEffect} from './effects.js';
export {renderEffect} from './effects.js';

const form = document.querySelector('.img-upload__form');
const smaller = document.querySelector('.scale__control--smaller');
const bigger = document.querySelector('.scale__control--bigger');

form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

form.addEventListener('reset', () => {
  resetForm();
});

form.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      return openPopup();
    case 'effect':
      return renderEffect(event.target.id);
  }
});

smaller.addEventListener('click', onSmallerClick);
bigger.addEventListener('click', onBiggerClick);
