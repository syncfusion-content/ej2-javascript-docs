import { TextBox } from '@syncfusion/ej2-inputs';


let textBoxObj: TextBox = new TextBox({
  placeholder: 'Enter address',
  multiline: true,
});
textBoxObj.appendTo('#input1');
