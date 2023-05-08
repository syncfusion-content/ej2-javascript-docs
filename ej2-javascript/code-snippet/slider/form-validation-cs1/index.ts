


import { Slider } from '@syncfusion/ej2-inputs';
import { FormValidator, FormValidatorModel } from '@syncfusion/ej2-inputs';
import { Button } from '@syncfusion/ej2-buttons';

// Initialize Slider component
let SliderMinObj: Slider = new Slider({
  type: 'MinRange',
  value: 30,
  ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
  changed: onMinChanged
});
SliderMinObj.appendTo("#min-slider");

// sets required property in the FormValidator rules collection
let minOptions: FormValidatorModel = {
  rules: {
    'min-slider': {
      validateHidden: true,
      min: [40, "You must select value greater than or equal to 40"]
    }
  }
};

// Initialize Form validation
let formMinObj: FormValidator;
formMinObj = new FormValidator("#formMinId", minOptions);

function onMinChanged(args: any) {
  // validate the slider value in the form
  formMinObj.validate();
}

// Initialize Slider component
let SliderMaxObj: Slider = new Slider({
  type: 'MinRange',
  value: 30,
  ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
  changed: onMaxChanged
});
SliderMaxObj.appendTo("#max-slider");

// sets required property in the FormValidator rules collection
let maxOptions: FormValidatorModel = {
  rules: {
    'max-slider': {
      validateHidden: true,
      max: [40, "You must select value less than or equal to 40"]
    }
  }
};

// Initialize Form validation
let formMaxObj: FormValidator;
formMaxObj = new FormValidator("#formMaxId", maxOptions);

function onMaxChanged(args: any) {
  // validate the slider value in the form
  formMaxObj.validate();
}

// Initialize Slider component
let SliderValObj: Slider = new Slider({
  type: 'MinRange',
  value: 30,
  ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
  changed: onValChanged
});
SliderValObj.appendTo("#val-slider");

// sets required property in the FormValidator rules collection
let valOptions: FormValidatorModel = {
  rules: {
    'val-slider': {
      validateHidden: true,
      regex: [/40/, "You must select value equal to 40"]
    }
  }
};

// Initialize Form validation
let formValObj: FormValidator;
formValObj = new FormValidator("#formValId", valOptions);

function onValChanged(args: any) {
  // validate the slider value in the form
  formValObj.validate();
}

// Initialize Slider component
let SliderRangeObj: Slider = new Slider({
  type: 'MinRange',
  value: 30,
  ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
  changed: onRangeChanged
});
SliderRangeObj.appendTo("#range-slider");

// sets required property in the FormValidator rules collection
let rangeOptions: FormValidatorModel = {
  rules: {
    'range-slider': {
      validateHidden: true,
      range: [40, 80, "You must select values between 40 and 80"]
    }
  }
};

// Initialize Form validation
let formRangeObj: FormValidator;
formRangeObj = new FormValidator("#formRangeId", rangeOptions);

function onRangeChanged(args: any) {
  // validate the slider value in the form
  formRangeObj.validate();
}

// Initialize Slider component
let SliderCustomObj: Slider = new Slider({
  type: 'Range',
  value: [30, 70],
  ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
  changed: onCustomChanged
});
SliderCustomObj.appendTo("#custom-slider");

// sets required property in the FormValidator rules collection
let customOptions: FormValidatorModel = {
  rules: {
    'custom-slider': {
      validateHidden: true,
      range: [validateRange, "You must select values between 40 and 80"]
    }
  }
};

// Initialize Form validation
let formCustomObj: FormValidator;
formCustomObj = new FormValidator("#formCustomId", customOptions);

function onCustomChanged(args: any) {
  // validate the slider value in the form
  formCustomObj.validate();
}

function validateRange(args: any) {
  return (SliderCustomObj.value as number[])[0] >= 40 && (SliderCustomObj.value as number[])[1] <= 80;
}



