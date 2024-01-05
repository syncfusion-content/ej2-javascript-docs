import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconWithLabel: StepModel[] = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment'},
  { label: 'Confirmation', iconCss: 'sf-icon-success' }
];

let linearStepper: Stepper = new Stepper({
  steps: iconWithLabel,
  linear: true
});

linearStepper.appendTo('#stepper');

(window as any).updateLinear = (args: any) => {
  linearStepper.linear = (/true/).test(args.value) ? true : false;
  linearStepper.reset();
};
