import {isEscapeKey} from '../utilities.js';
import {renderComments} from './comments.js';

const popup = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    closePopup();
  }
};

const onCloseButtonClick = () => {
  closePopup();
};

function showPopup() {
  popup.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onCloseButtonClick);
}

function closePopup() {
  popup.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  closeButton.removeEventListener('click', onCloseButtonClick);
}

const renderPopupDetails = (properties) => {
  const {url, description, likes, comments} = properties;
  popup.querySelector('.big-picture__img img').src = url;
  popup.querySelector('.big-picture__img img').alt = description;
  popup.querySelector('.likes-count').textContent = likes;
  popup.querySelector('.social__caption').textContent = description;
  renderComments(comments);
};

const onThumbnailClick = () => {
  document.addEventListener('thumbnailSelect', (event) => {
    event.preventDefault();
    renderPopupDetails(event.detail);
    showPopup();
  });
};

export {onThumbnailClick};
