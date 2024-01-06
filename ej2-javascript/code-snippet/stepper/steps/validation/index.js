var iconOnly = [
  { iconCss: 'sf-icon-cart', isValid: true },
  { iconCss: 'sf-icon-transport' },
  { iconCss: 'sf-icon-payment', isValid: false },
  { iconCss: 'sf-icon-success' }
];

  var iconStepper = new ej.navigations.Stepper({
    steps: iconOnly
  });
  iconStepper.appendTo("#stepper");


  var labelOnly = [
    { label: 'Cart', isValid: true },
    { label: 'Address' },
    { label: 'Payment', isValid: false },
    { label: 'Confirmation' }
  ];
  
  var labelsStepper = new ej.navigations.Stepper({
    steps: labelOnly
  });
  labelsStepper.appendTo("#labelStepper");