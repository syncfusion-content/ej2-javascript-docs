import { TextBox } from '@syncfusion/ej2-inputs';


let disableTextBox: TextBox = new TextBox({
  placeholder: 'Input with warning',
  enabled: false,
});
disableTextBox.appendTo('#disable');