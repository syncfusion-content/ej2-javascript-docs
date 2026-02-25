
var stepper = new ej.navigations.Stepper({
  steps: [{}, {}, {}, {}],
  stepChanged: function (args) {
    alert("Step changed from "+args.previousStep + " to " + args.activeStep);
  }
});
stepper.appendTo("#stepper");