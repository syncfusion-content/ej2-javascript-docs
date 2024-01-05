import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithText: StepModel[] = [
  { text: 'Cart', iconCss: 'sf-icon-cart' },
  { text: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { text: 'Payment', iconCss: 'sf-icon-payment'},
  { text: 'Confirmation', iconCss: 'sf-icon-success' }
];

let stepper: Stepper = new Stepper({
  steps: iconWithText,
  enableRtl: true
});

stepper.appendTo('#stepper');