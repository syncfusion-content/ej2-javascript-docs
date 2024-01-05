import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let stepperLabel: StepModel[] = [
  { label: 'Cart'},
  { label: 'Delivery Address'},
  { label: 'Payment'},
  { label: 'Confirmation' }
];

let stepperWithLabel: Stepper = new Stepper({
  steps: stepperLabel
});

stepperWithLabel.appendTo('#stepper');
