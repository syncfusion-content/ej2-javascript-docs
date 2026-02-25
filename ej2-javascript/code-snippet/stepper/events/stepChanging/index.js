
var stepper = new ej.navigations.Stepper({
  steps: [{}, {}, {}, {}],
  stepChanging: function (args) {
    alert("Step changing from "+args.previousStep + " to " + args.activeStep);
  }
});
stepper.appendTo("#stepper");