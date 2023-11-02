import { Stepper } from '@syncfusion/ej2-navigations';

// Initializes the Stepper control
let stepper: Stepper = new Stepper({
  steps: [{}, {}, {}, {}, {}],
});

// Render initialized Stepper.
stepper.appendTo("#stepper");