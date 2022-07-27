const SliderPriceValue = {
  MIN: 0,
  MAX: 100000,
  DEFAULT: 1000,
  STEP: 1,
};

const valueElement = document.querySelector('#price');
const sliderElement = document.querySelector('.ad-form__slider');

valueElement.value = SliderPriceValue.DEFAULT;

noUiSlider.create(sliderElement, {
  range: {
    min: SliderPriceValue.MIN,
    max: SliderPriceValue.MAX,
  },
  start: SliderPriceValue.DEFAULT,
  step: SliderPriceValue.STEP,
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
  sliderElement.noUiSlider.set(SliderPriceValue.DEFAULT);
};

export {sliderReset};
