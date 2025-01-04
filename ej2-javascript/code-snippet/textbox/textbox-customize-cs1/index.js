ej.base.enableRipple(true);

var normalTextBox = new ej.inputs.TextBox({
    placeholder: 'First Name',
  });
  normalTextBox.appendTo('#normal');
  var floatTextBox= new ej.inputs.TextBox({
    placeholder: 'Last Name',
    floatLabelType: 'Auto',
  });
  floatTextBox.appendTo('#float');

