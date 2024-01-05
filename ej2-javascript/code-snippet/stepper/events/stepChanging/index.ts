import { Stepper, StepperChangingEventArgs } from '@syncfusion/ej2-navigations';

let stepper: Stepper = new Stepper({
  steps: [{}, {}, {}, {}],
  stepChanging: (args: StepperChangingEventArgs) => {
    alert("Step changing from "+args.previousStep + " to " + args.activeStep)
  }
});

stepper.appendTo('#stepper');
