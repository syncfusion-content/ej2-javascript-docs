ej.base.enableRipple(true);

var warningFloatTextBox = new ej.inputs.TextBox({
    placeholder: 'Warning',
    cssClass: 'e-warning',
    floatLabelType: 'Auto',
  });
  warningFloatTextBox.appendTo('#warning');
  var successIconTextBox = new ej.inputs.TextBox({
    placeholder: 'Success',
    cssClass: 'e-success',
    floatLabelType: 'Auto',
  });
  successIconTextBox.appendTo('#success');