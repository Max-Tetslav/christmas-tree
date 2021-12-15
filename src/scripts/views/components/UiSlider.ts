import noUiSlider, { target } from 'nouislider';

function createSlider(targetEl: target, min: number, max: number, stepCount: number) {
  const input = targetEl;

  noUiSlider.create(input, {
    start: [min, max],
    connect: true,
    step: stepCount,
    tooltips: [true, true],
    range: {
      min: [min],
      max: [max],
    },
  });
}

export default createSlider;
