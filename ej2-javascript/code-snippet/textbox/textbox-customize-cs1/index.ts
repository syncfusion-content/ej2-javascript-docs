import {  TextBox } from '@syncfusion/ej2-inputs';

let normalTextBox: TextBox = new TextBox({
        placeholder: 'First Name',
      });
      normalTextBox.appendTo('#normal');
      var floatTextBox: TextBox = new TextBox({
        placeholder: 'Last Name',
        floatLabelType: 'Auto',
      });
      floatTextBox.appendTo('#float');