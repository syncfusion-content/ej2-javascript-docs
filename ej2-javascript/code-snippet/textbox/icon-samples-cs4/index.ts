import { InputObject, TextBox } from '@syncfusion/ej2-inputs';

let warningTextBox: TextBox = new TextBox({
    placeholder: 'Input with warning',
    cssClass: 'e-warning',
  });
  warningTextBox.appendTo('#warning');
  let errorFloatTextBox: TextBox = new TextBox({
    placeholder: 'Input with error',
    cssClass: 'e-error',
  });
  errorFloatTextBox.appendTo('#error');
  let successIconTextBox: TextBox = new TextBox({
    placeholder: 'Input with success',
    cssClass: 'e-success',
  });
  successIconTextBox.appendTo('#success');