import { Stepper } from '@syncfusion/ej2-navigations';

let animationStepper: Stepper = new Stepper({
  steps: [{}, {}, {}, {}],
  animation: {enable: true, duration: 2000, delay: 500}
});

animationStepper.appendTo('#stepper');
