
var stepper = new ej.navigations.Stepper({
  steps: [{}, {}, {}, {}],
  beforeStepRender: function (args) {
    //Your required action here
  }
});
stepper.appendTo("#stepper");