var textOnly = [
  { text: 'A' },
  { text: 'B' },
  { text: 'C' },
  { text: 'D' }
  ];

  var labelOnly = [
    { label: 'Cart' },
    { label: 'Delivery Address' },
    { label: 'Payment' },
    { label: 'Confirmation' }
  ];

  var textStepper = new ej.navigations.Stepper({
    steps: textOnly,
    stepType: 'indicator'
  });
  textStepper.appendTo("#stepper");

  var labelsStepper = new ej.navigations.Stepper({
    steps: labelOnly
  });
  labelsStepper.appendTo("#labelStepper");