import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let textOnly: StepModel[] = [
  { text: 'A' },
  { text: 'B' },
  { text: 'C' },
  { text: 'D' }
];

let labelOnly: StepModel[] = [
  { label: 'Cart' },
  { label: 'Delivery Address' },
  { label: 'Payment' },
  { label: 'Ordered' }
];

let textStepper: Stepper = new Stepper({
  steps: textOnly,
  stepType: 'indicator'
});

textStepper.appendTo('#stepper');

let labelsStepper: Stepper = new Stepper({
  steps: labelOnly
});

labelsStepper.appendTo('#labelStepper');
