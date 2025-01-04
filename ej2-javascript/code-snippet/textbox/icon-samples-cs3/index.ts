import { TextBox } from '@syncfusion/ej2-inputs';

// First TextBox without an icon
let textBoxObj: TextBox = new TextBox({
  placeholder: 'Enter Date',
});
textBoxObj.appendTo('#textbox');

// Second TextBox with an icon
let iconTextBox: TextBox = new TextBox({
  placeholder: 'Enter Date',
  created: () => {
    iconTextBox.addIcon('append', 'e-date-icon');
  },
});
iconTextBox.appendTo('#textboxicon');
