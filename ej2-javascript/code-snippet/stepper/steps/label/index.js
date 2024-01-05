var stepperLabel = [
  { label: 'Cart'},
  { label: 'Delivery Address' },
  { label: 'Payment'},
  { label: 'Confirmation' }
  ];

  var stepperWithLabel = new ej.navigations.Stepper({
  steps: stepperLabel
  });
  stepperWithLabel.appendTo("#stepper");