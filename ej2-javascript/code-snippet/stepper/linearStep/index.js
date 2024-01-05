var iconWithLabel = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Delivery Address', iconCss: 'sf-icon-transport' },
  { label: 'Payment', iconCss: 'sf-icon-payment'},
  { label: 'Confirmation', iconCss: 'sf-icon-success' }
  ];

  var linearStepper = new ej.navigations.Stepper({
  steps: iconWithLabel,
  linear: true
  });
  linearStepper.appendTo("#stepper");

window.updateLinear = function(args) {
  linearStepper.linear = (/true/).test(args.value) ? true : false;
  linearStepper.reset();
};