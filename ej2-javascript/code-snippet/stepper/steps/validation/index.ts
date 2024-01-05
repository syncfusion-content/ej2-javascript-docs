import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconOnly: StepModel[] = [
  { iconCss: 'sf-icon-cart', isValid: true },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment', isValid: false },
  { iconCss: 'sf-icon-success' }
];

let iconStepper: Stepper = new Stepper({
  steps: iconOnly
});

iconStepper.appendTo('#stepper');


let labelOnly: StepModel[] = [
  { label: 'Cart', isValid: true },
  { label: 'Address' },
  { label: 'Payment', isValid: false },
  { label: 'Confirmation' }
];

let labelsStepper: Stepper = new Stepper({
  steps: labelOnly
});

labelsStepper.appendTo('#labelStepper');
