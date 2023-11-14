import {openPopup, closePopup} from './popup.js';
import {checkValidity, resetValidity} from './validation.js';
import {getScale, resetScale} from './scale.js';
import {setEffect, getEffectValue, resetEffect} from './effects.js';

const form = document.querySelector('.img-upload__form');
const uploadField = form.querySelector('.img-upload__input');
const picture = form.querySelector('.img-upload__preview img');
const effectPreviewPictures = form.querySelectorAll('.effects__preview');
const submitButton = form.querySelector('.img-upload__submit');

const uploadPicture = (fileExtensions = ['jpg', 'jpeg', 'png']) => {
  const file = uploadField.files[0];
  const validate = fileExtensions.some((value) => file.name.toLowerCase().endsWith(value));

  if (validate) {
    picture.src = URL.createObjectURL(file);
    effectPreviewPictures.forEach((effectPreviewPicture) => {
      effectPreviewPicture.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    });
  }
};

const setSubmitDisabled = (flag) => {
  submitButton.disabled = flag;
  submitButton.textContent = flag ? 'Публикую...' : 'Опубликовать';
};

form.addEventListener('change', (event) => {
  switch (event.target.name) {
    case 'filename':
      uploadPicture();
      openPopup();
      break;
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
  event.preventDefault();
  if (checkValidity()) {
    new FormData(form);
  }
});

form.addEventListener('reset', () => {
  resetValidity();
  resetScale();
  resetEffect();
});

const resetForm = () => {
  form.reset();
  closePopup();
};

export {setSubmitDisabled, resetForm};
