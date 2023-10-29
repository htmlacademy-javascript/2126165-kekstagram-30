import {isEscapeKey} from '../utilities.js';
import {renderComments} from './comments.js';

const popup = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');

const renderPopupDetails = (properties) => {
  const {url, description, likes, comments} = properties;
  popup.querySelector('.big-picture__img img').src = url;
  popup.querySelector('.big-picture__img img').alt = description;
  popup.querySelector('.likes-count').textContent = likes;
  popup.querySelector('.social__caption').textContent = description;
  renderComments(comments);
};
