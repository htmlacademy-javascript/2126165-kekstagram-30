import '../../vendor/nouislider/nouislider.js';
import '../../vendor/nouislider/nouislider.css';

const container = document.querySelector('.img-upload__effect-level');
const field = document.querySelector('.effect-level__value');

const ranges = {
  none: [0, 100, 1],
  chrome: [0, 1, 0.1],
  sepia: [0, 1, 0.1],
  marvin: [0, 100, 1],
  phobos: [0, 3, 0, 1],
  heat: [1, 3, 0.1]
};

const formatters = {
  none: () => '',
  chrome: (value) => `grayscale(${value})`,
  sepia: (value) => `sepia(${value})`,
  marvin: (value) => `invert(${value}%)`,
  phobos: (value) => `blur(${value}px)`,
  heat: (value) => `brightness(${value})`
};

const createOptions = (type) => {
  const [min, max, step] = ranges[type];
  return {
    range: {min, max},
    step,
    start: max,
    connect: 'lower',
    behaviour: 'snap smooth-steps'
  };
};

const slider = document.querySelector('.effect-level__slider');
noUiSlider.create(slider, createOptions('none'));

let filter;

const createEffect = (effect, units = '') => {
  container.classList.remove('hidden');

  slider.noUiSlider.on('update', () => {
    filter = `${effect}(${slider.noUiSlider.get()}${units})`;
    field.value = slider.noUiSlider.get();
    field.dispatchEvent(new CustomEvent('change', {bubbles: true}));
  });
};

const noEffect = () => {
  container.classList.add('hidden');
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

export {renderEffect, resetEffect, filter};
