var stepperIcon = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment', disabled: true},
  { iconCss: 'sf-icon-success' }
];

  var stepper = new ej.navigations.Stepper({
  steps: stepperIcon
  });
  stepper.appendTo("#stepper");