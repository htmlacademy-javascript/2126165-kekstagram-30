const [addButton, display, removeButton] = document.querySelectorAll('.scale__control');
const scaleValue = scale.querySelector('.scale__control--value');

let currentScaleValue = parseInt(scaleValue.value, 10);

const renderScale = () => {
  scaleValue.dispatchEvent(new CustomEvent('change', {bubbles: true}));
};

const onRemoveButtonClick = () => {
  if (currentScaleValue > 25) {
    scaleValue.value = `${currentScaleValue -= 25}%`;
  }

  renderScale();
};

const onAddButtonClick = () => {
  if (currentScaleValue < 100) {
    scaleValue.value = `${currentScaleValue += 25}%`;
  }

  renderScale();
};

const resetScale = () => {
  scaleValue.value = '100%';
};

addButton.addEventListener('click', onRemoveButtonClick);
removeButton.addEventListener('click', onAddButtonClick);

export {currentScaleValue, resetScale};
