
var stepper = new ej.navigations.Stepper({
  steps: [{}, {}, {}, {}],
  beforeStepRender: (args) =>{
    //Your required action here
  }
});
stepper.appendTo("#stepper");