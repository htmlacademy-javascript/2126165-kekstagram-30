import {openPopup} from './popup.js';
import {validateForm, resetForm} from './validation.js';
import {onRemoveButtonClick, onAddButtonClick, resetScale} from './scale.js';
import {renderEffect, resetEffect} from './effects.js';

const form = document.querySelector('.img-upload__form');
const addButton = document.querySelector('.scale__control--smaller');
const removeButton = document.querySelector('.scale__control--bigger');
const sliderContainer = document.querySelector('.img-upload__effect-level');

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

form.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      sliderContainer.classList.add('hidden');
      addButton.addEventListener('click', onRemoveButtonClick);
      removeButton.addEventListener('click', onAddButtonClick);
      return openPopup();
    case 'effect':
      return renderEffect(event.target.id);
  }
});
