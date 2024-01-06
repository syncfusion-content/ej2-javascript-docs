

import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let iconOnly: StepModel[] = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment' },
  { iconCss: 'sf-icon-success' }
];

let stepperWithIcon: Stepper = new Stepper({
  steps: iconOnly
});

stepperWithIcon.appendTo('#stepper');