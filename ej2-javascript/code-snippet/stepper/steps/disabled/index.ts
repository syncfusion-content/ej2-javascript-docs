import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let stepperIcon: StepModel[] = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment', disabled: true},
  { iconCss: 'sf-icon-success' }
];

let stepper: Stepper = new Stepper({
  steps: stepperIcon
});

stepper.appendTo('#stepper');
