import { Stepper } from '@syncfusion/ej2-navigations';

let stepper: Stepper = new Stepper({
  steps: [{}, {}, {}, {}],
  created: () => {
    //Your required action here
  }
});

stepper.appendTo('#stepper');
