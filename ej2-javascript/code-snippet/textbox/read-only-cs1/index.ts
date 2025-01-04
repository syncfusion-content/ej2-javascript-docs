import { InputObject, TextBox } from '@syncfusion/ej2-inputs';

let readonlyTextBox: TextBox = new TextBox({
  placeholder: 'Readonly Textbox',
  readonly: true,
  floatLabelType: 'Auto',
});
readonlyTextBox.appendTo('#readonly');
document.getElementById('setValueButton').addEventListener('click', function () {
    readonlyTextBox.value = '10';
  });

document.getElementById('clearValueButton').addEventListener('click', function () {
    readonlyTextBox.value = ''; // Clear the value
  });