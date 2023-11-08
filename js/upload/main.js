import {openPopup} from './popup.js';
import {validateForm, resetForm} from './validation.js';
import {getScale, resetScale} from './scale.js';
import {setEffect, getEffectValue, resetEffect} from './effects.js';

const form = document.querySelector('.img-upload__form');
const picture = document.querySelector('.img-upload__preview img');

form.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      return openPopup();
    case 'effect-level':
      picture.style.filter = getEffectValue();
      break;
    case 'effect':
      setEffect(event.target.value);
      break;
    case 'scale':
      picture.style.transform = `scale(${getScale() / 100})`;
      break;
  }
});

form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

form.addEventListener('reset', () => {
  resetForm();
  resetScale();
  resetEffect();
});
