import {openPopup} from './popup.js';
import {validateForm, resetForm} from './validation.js';
import {currentScaleValue, resetScale} from './scale.js';
import {renderEffect, resetEffect} from './effects.js';

const form = document.querySelector('.img-upload__form');
const picture = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const transformPictureScale = () => {
  picture.style.transform = `scale(${currentScaleValue / 100})`;
};

const resetPictureScale = () => {
  picture.style.transform = 'none';
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
  resetPictureScale();
  resetEffect();
});

form.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      resetSlider();
      return openPopup();
    case 'effect':
      return renderEffect(event.target.id);
    case 'scale':
      return transformPictureScale();
  }
});
