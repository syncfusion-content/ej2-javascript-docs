import { Stepper, StepperChangedEventArgs } from '@syncfusion/ej2-navigations';

let stepper: Stepper = new Stepper({
  steps: [{}, {}, {}, {}],
  stepChanged: (args: StepperChangedEventArgs) => {
    alert("Step Changed from "+args.previousStep + " to " + args.activeStep)
  }
});

stepper.appendTo('#stepper');
