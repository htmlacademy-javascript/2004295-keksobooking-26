// Реализация noUIslider
const valueElement = document.querySelector('#price');
const sliderElement = document.querySelector('.ad-form__slider');

const DEFAULT_PRICE_VALUE = 1000;

valueElement.value = DEFAULT_PRICE_VALUE;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: DEFAULT_PRICE_VALUE,
  step: 1,
  connect: 'lower',
  format: {
    to:
    (value) => Number.isInteger(value) ? value : value.toFixed(0),
    from:
    (value) => parseFloat(value),
  },
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

const sliderReset = () => {
  sliderElement.noUiSlider.set(DEFAULT_PRICE_VALUE);
};

export {sliderReset};
