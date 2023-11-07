import '../../vendor/nouislider/nouislider.js';
import '../../vendor/nouislider/nouislider.css';

const container = document.querySelector('.img-upload__effect-level');
const slider = document.querySelector('.effect-level__slider');
const picture = document.querySelector('.img-upload__preview img');
const field = document.querySelector('.effect-level__value');

noUiSlider.create(slider, {
  range: {
    min: 1,
    max: 10,
  },
  start: 10,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  }
});

const createEffect = (effect, units = '') => {
  container.classList.remove('hidden');

  slider.noUiSlider.on('update', () => {
    picture.style.filter = `${effect}(${slider.noUiSlider.get()}${units})`;
    field.value = slider.noUiSlider.get();
  });
};

const noEffect = () => {
  container.classList.add('hidden');
  picture.style.filter = 'none';
};

const chromeEffect = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  });

  createEffect('grayscale');
};

const sepiaEffect = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  });

  createEffect('sepia');
};

const marvinEffect = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1
  });

  createEffect('invert', '%');
};

const phobosEffect = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1
  });

  createEffect('blur', 'px');
};

const heatEffect = () => {
  slider.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3
    },
    start: 3,
    step: 0.1
  });

  createEffect('brightness');
};

const renderEffect = (effect) => {
  switch (effect) {
    case 'effect-none':
      return noEffect();
    case 'effect-chrome':
      return chromeEffect();
    case 'effect-sepia':
      return sepiaEffect();
    case 'effect-marvin':
      return marvinEffect();
    case 'effect-phobos':
      return phobosEffect();
    case 'effect-heat':
      return heatEffect();
  }
};

const resetEffect = () => noEffect();

export {renderEffect, resetEffect};
