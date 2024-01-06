
var stepper = new ej.navigations.Stepper({
  steps: [{}, {}, {}, {}],
  stepChanging: (args) =>{
    alert("Step changing from "+args.previousStep + " to " + args.activeStep)
  }
});
stepper.appendTo("#stepper");