var iconOnly = [
  { iconCss: 'sf-icon-cart' },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment'},
  { iconCss: 'sf-icon-success' }
  ];

  var horizontalStepper = new ej.navigations.Stepper({
  steps: iconOnly,
  orientation: 'horizontal'
  });
  horizontalStepper.appendTo("#stepper");