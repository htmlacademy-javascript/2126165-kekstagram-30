const popup = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');

const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc')) {
    closeButton.click();
  }
};

const openPopup = () => {
  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

closeButton.addEventListener('click', () => closePopup());

export {openPopup};
