import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let stepperIcon: StepModel[] = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment', optional: true },
  { iconCss: 'sf-icon-success' }
];

let optionalStepper: Stepper = new Stepper({
  steps: stepperIcon
});

optionalStepper.appendTo('#stepper');
