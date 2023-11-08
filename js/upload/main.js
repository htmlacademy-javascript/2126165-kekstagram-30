import {openPopup} from './popup.js';
import {validateForm, resetForm} from './validation.js';
import {getScale, resetScale} from './scale.js';
import {renderEffect, resetEffect, filter} from './effects.js';

const form = document.querySelector('.img-upload__form');
const picture = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const createPictureFilter = () => {
  picture.style.filter = filter;
};

const resetPictureFilter = () => {
  picture.style.filter = 'none';
};

const resetSlider = () => sliderContainer.classList.add('hidden');

form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

form.addEventListener('reset', () => {
  resetForm();
  resetScale();
  resetEffect();
  resetPictureFilter();
});

form.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      resetSlider();
      return openPopup();
    case 'effect':
      return renderEffect(event.target.id);
    case 'effect-level':
      return createPictureFilter();
    case 'scale':
      picture.style.transform = `scale(${getScale() / 100})`;
      break;
  }
});
