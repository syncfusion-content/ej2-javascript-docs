import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithLabel: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment' },
  { label: 'Confirmation', iconCss: 'sf-icon-success' }
];

let stepper: Stepper = new Stepper({
  steps: iconWithLabel,
  stepType: 'label'
});

stepper.appendTo('#stepper');
