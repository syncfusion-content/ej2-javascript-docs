import { Stepper, StepperClickEventArgs } from '@syncfusion/ej2-navigations';

let stepper: Stepper = new Stepper({
  steps: [{}, {}, {}, {}],
  stepClick: (args: StepperClickEventArgs) => {
    //Your required action here
  }
});

stepper.appendTo('#stepper');
