var iconWithLabel = [
  { label: 'Cart', iconCss: 'sf-icon-cart' },
  { label: 'Payment', iconCss: 'sf-icon-payment' },
  { label: 'Ordered', iconCss: 'sf-icon-success' }
];

var stepper = new ej.navigations.Stepper({
  steps: iconWithLabel,
  stepChanged: () => {
    var status = stepper.steps[1].status
    updateStatus(status)
  }
});
stepper.appendTo('#stepperStatus');

function updateStatus(stepStatus) {
  var statusMap = {
      'NotStarted': { text: 'Your payment has not started yet', color: '#e74d4d' },
      'InProgress': { text: 'Processing your payment', color: 'orange' },
      'Completed': { text: 'Payment successful', color: '#4CAF50' }
  };

  var currentStatus = document.getElementById("paymentStatus");
  if (currentStatus) {
      var { text, color } = statusMap[stepStatus];
      currentStatus.innerText = text;
      currentStatus.style.backgroundColor = color;
  }
}