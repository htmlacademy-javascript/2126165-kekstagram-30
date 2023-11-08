const [addButton, display, removeButton] = document.querySelectorAll('.scale__control');
const config = {min: 25, max: 100, step: 25, defaultValue: 100};

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
