var stepperIconLabel = [
  { iconCss: 'sf-icon-cart', label: 'Cart' },
  { iconCss: 'sf-icon-transport', label: 'Delivery Address' },
  { iconCss: 'sf-icon-payment', label: 'Payment', cssClass: 'custom-step', optional: true},
  { iconCss: 'sf-icon-success', label: 'Confirmation' }
];

  var stepper = new ej.navigations.Stepper({
  steps: stepperIconLabel
  });
  stepper.appendTo("#stepper");