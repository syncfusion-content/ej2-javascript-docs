ej.base.enableRipple(true);

var warningTextBox = new ej.inputs.TextBox({
    placeholder: 'Input with warning',
    cssClass: 'e-warning',
  });
  warningTextBox.appendTo('#warning');
  var errorFloatTextBox = new ej.inputs.TextBox({
    placeholder: 'Input with error',
    cssClass: 'e-error',
  });
  errorFloatTextBox.appendTo('#error');
  var successIconTextBox = new ej.inputs.TextBox({
    placeholder: 'Input with success',
    cssClass: 'e-success',
  });
  successIconTextBox.appendTo('#success');
  