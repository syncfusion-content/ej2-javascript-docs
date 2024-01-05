var iconOnly = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment' },
  { iconCss: 'sf-icon-success' }
  ];

  var verticalStepper = new ej.navigations.Stepper({
  steps: iconOnly,
  orientation: 'vertical'
  });
  verticalStepper.appendTo("#stepper");