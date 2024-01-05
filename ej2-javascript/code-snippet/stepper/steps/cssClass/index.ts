import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let stepperIconLabel: StepModel[] = [
  { iconCss: 'sf-icon-cart', label: 'Cart' },
  { iconCss: 'sf-icon-transport', label: 'Delivery Address' },
  { iconCss: 'sf-icon-payment', label: 'Payment', cssClass: 'custom-step', optional: true},
  { iconCss: 'sf-icon-success', label: 'Confirmation' }
];

let stepper: Stepper = new Stepper({
  steps: stepperIconLabel
});

stepper.appendTo('#stepper');
