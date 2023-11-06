import {validateForm, resetForm} from './validation.js';

const pictureUpload = document.querySelector('.img-upload__input');
const form = document.querySelector('.img-upload__form');
const popup = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');

const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc') && !event.target.type?.startsWith('text')) {
    closeButton.click();
  }
};

const onOverlayClick = (event) => {
  if (event.target === popup) {
    closeButton.click();
  }
};

const openPopup = () => {
  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onOverlayClick);
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureUpload.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onOverlayClick);
};

closeButton.addEventListener('click', () => closePopup());

const renderPopup = () => {

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

export {renderPopup};
