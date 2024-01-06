import { Stepper, StepModel } from '@syncfusion/ej2-navigations';

let textOnly: StepModel[] = [
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '4' }
];

let defaultStepper: Stepper = new Stepper({
  steps: [{}, {}, {}, {}],
  stepType: 'indicator'
});

defaultStepper.appendTo('#stepperDefault');

let textStepper: Stepper = new Stepper({
  steps: textOnly,
  stepType: 'indicator'
});

textStepper.appendTo('#stepper');
