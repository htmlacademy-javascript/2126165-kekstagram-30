const scale = document.querySelector('.img-upload__scale');
const scaleValue = scale.querySelector('.scale__control--value');
const picture = document.querySelector('.img-upload__preview img');

let currentScaleValue = parseInt(scaleValue.value, 10);

const transformPicture = () => {
  picture.style.transform = `scale(${currentScaleValue / 100})`;
};

const onSmallerClick = () => {
  if (currentScaleValue > 25) {
    scaleValue.value = `${currentScaleValue -= 25}%`;
    transformPicture();
  }
};

const onBiggerClick = () => {
  if (currentScaleValue < 100) {
    scaleValue.value = `${currentScaleValue += 25}%`;
    transformPicture();
  }
};

const resetScale = () => {
  scaleValue.value = '100%';
  picture.style.transform = 'none';
};

export {onSmallerClick, onBiggerClick, resetScale};
