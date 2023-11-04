import '../../vendor/pristine/pristine.min.js';
import {getUnique} from '../utilities.js';

const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

let error;

const validateHashtag = (hashtag) => {

  if (hashtag[0] !== '#') {
    error = 'Хэш-тег должен начинаться с символа # (решётка)';
    return false;
  }

  if (hashtag.length > 20) {
    error = 'Максимальная длина одного хэш-тега 20 символов, включая решётку';
    return false;
  }

  if (hashtag === '#') {
    error = 'Хеш-тег не может состоять только из одной решётки';
    return false;
  }

  if (hashtag[1] === ' ') {
    error = 'Строка после решётки не может содержать пробелы';
    return false;
  }

  if (!hashtagPattern.test(hashtag)) {
    error = 'Строка после решётки должна состоять из букв и чисел и не может содержать спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.';
    return false;
  }

  return true;
};

const validateHashtagData = (hashtagValue) => {

  if (hashtagValue) {
    const hashtagData = hashtagValue.toLowerCase().split(' ');

    if (hashtagData.length > 5) {
      error = 'Нельзя указать больше пяти хэш-тегов';
      return false;
    }

    if (getUnique(hashtagData).length !== hashtagData.length) {
      error = 'Один и тот же хэш-тег не может быть использован дважды';
      return false;
    }

    for (let i = 0; i < hashtagData.length; i++) {
      if (!validateHashtag(hashtagData[i])) {
        return false;
      }
    }
  }

  return true;
};

const getHashtagError = () => error;

const validateComment = (value) => value.length <= 140;

pristine.addValidator(hashtagField, validateHashtagData, getHashtagError);

pristine.addValidator(commentField, validateComment, 'Длина комментария не может составлять больше 140 символов');

const validateForm = () => {
  pristine.validate();
};

const resetForm = () => {
  pristine.reset();
};

export {validateForm, resetForm};
