import { InputObject, TextBox } from '@syncfusion/ej2-inputs';

let warningFloatTextBox: TextBox = new TextBox({
    placeholder: 'Warning',
    cssClass: 'e-warning',
    floatLabelType: 'Auto',
  });
  warningFloatTextBox.appendTo('#warning');
  let successIconTextBox: TextBox = new TextBox({
    placeholder: 'Success',
    cssClass: 'e-success',
    floatLabelType: 'Auto',
  });
  successIconTextBox.appendTo('#success');