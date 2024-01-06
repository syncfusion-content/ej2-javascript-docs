import { Stepper, StepperRenderingEventArgs } from '@syncfusion/ej2-navigations';

let stepper: Stepper = new Stepper({
  steps: [{}, {}, {}, {}],
  beforeStepRender: (args: StepperRenderingEventArgs) => {
    //Your required action here
  }
});

stepper.appendTo('#stepper');
