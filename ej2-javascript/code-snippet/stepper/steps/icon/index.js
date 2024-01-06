var iconOnly = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment' },
  { iconCss: 'sf-icon-success' }
];

var stepperWithIcon = new ej.navigations.Stepper({
  steps: iconOnly
});
  stepperWithIcon.appendTo("#stepper");