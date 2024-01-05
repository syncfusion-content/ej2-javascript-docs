var textOnly = [
  { text: '1' },
  { text: '2' },
  { text: '3' },
  { text: '4' }
];

var defaultStepper = new ej.navigations.Stepper({
  steps: [{}, {}, {}, {}],
  stepType: 'indicator'
});
defaultStepper.appendTo("#stepperDefault");

var textStepper = new ej.navigations.Stepper({
  steps: textOnly,
  stepType: 'indicator'
});
textStepper.appendTo("#stepper");
