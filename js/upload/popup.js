const popup = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('.img-upload__cancel');

const onDocumentKeydown = (event) => {
  if (event.key.startsWith('Esc') && !event.target.type?.startsWith('text')) {
    closeButton.click();
  }
};

const onPopupOverlayClick = (event) => {
  if (event.target === popup) {
    closeButton.click();
  }
};

const openPopup = () => {
  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onPopupOverlayClick);
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onPopupOverlayClick);
};

closeButton.addEventListener('click', () => closePopup());

export {openPopup};
