import '../../vendor/pristine/pristine.min.js';
import {getUniqueArrayItems} from '../utilities.js';

const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const split = (value) => value.split(' ').filter(Boolean);

pristine.addValidator(form.hashtags, (value) => {
  const hashtags = split(value.toLowerCase());
  return hashtags.length === new Set(hashtags).size;
}, 'Один и тот же хэш-тег не может быть использован дважды', 1, true);

pristine.addValidator(form.hashtags, (value) => {
  const maxHashtags = 5;
  return split(value).length <= maxHashtags;
}, 'Нельзя указать больше пяти хэш-тегов', 1, true);

pristine.addValidator(form.hashtags, (value) => {
  const maxHashtagsLength = 20;
  return split(value).every((hashtag) => hashtag.length <= maxHashtagsLength);
}, 'Максимальная длина одного хэш-тега 20 символов, включая решётку', 1, true);

pristine.addValidator(form.hashtags, (value) => {
  const firstSymbol = '#';
  return split(value).every((hashtag) => hashtag[0] === firstSymbol);
}, 'Хэш-тег должен начинаться с символа # (решётка)', 1, true);

pristine.addValidator(form.hashtags, (value) => {
  const symbol = '#';
  return split(value).every((hashtag) => hashtag !== symbol);
}, 'Хеш-тег не может состоять только из одной решётки', 1, true);

pristine.addValidator(form.hashtags, (value) => {
  const hashtagPattern = /^#[a-zа-я0-9]+$/i;
  return split(value).every((hashtag) => hashtagPattern.test(hashtag));
}, 'Строка после решётки должна состоять из букв и чисел и не может содержать спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.', 1, true);

  return true;
};

const validateHashtagData = (hashtagValue) => {

  if (hashtagValue) {
    const hashtagData = hashtagValue.toLowerCase().split(' ');

    for (let i = 0; i < hashtagData.length; i++) {
      if (!validateHashtag(hashtagData[i])) {
        return false;
      }
    }

    if (hashtagData.length > 5) {
      error = 'Нельзя указать больше пяти хэш-тегов';
      return false;
    }

    if (getUniqueArrayItems(hashtagData).length !== hashtagData.length) {
      error = 'Один и тот же хэш-тег не может быть использован дважды';
      return false;
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
