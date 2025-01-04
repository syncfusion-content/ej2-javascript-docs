import { TextBox } from '@syncfusion/ej2-inputs';


let readonlyTextBox: TextBox = new TextBox({
  placeholder: 'Input with warning',
  readonly: true,
});
readonlyTextBox.appendTo('#readonly');