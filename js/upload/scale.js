const [addButton, display, removeButton] = document.querySelectorAll('.scale__control');
const config = {min: 25, max: 100, step: 25, defaultValue: 100};

const setScale = (value) => {
  value = Math.max(value, config.min);
  value = Math.min(value, config.max);
  display.value = `${value}%`;
  display.dispatchEvent(new Event('change', {bubbles: true}));
};

const getScale = () => Number.parseFloat(display.value);

const resetScale = () => setScale(config.defaultValue);

const addScale = () => setScale(getScale() - config.step);

const removeScale = () => setScale(getScale() + config.step);

addButton.addEventListener('click', () => addScale());
removeButton.addEventListener('click', () => removeScale());

export {getScale, resetScale};
