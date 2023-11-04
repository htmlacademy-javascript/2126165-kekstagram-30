import '../../vendor/pristine/pristine.min.js';

const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const validateComment = (value) => value.length <= 140;

pristine.addValidator(commentField, validateComment, 'Длина комментария не может составлять больше 140 символов');

const validateForm = () => {
  pristine.validate();
};

const resetForm = () => {
  pristine.reset();
};

export {validateForm, resetForm};
