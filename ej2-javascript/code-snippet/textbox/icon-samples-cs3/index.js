// First TextBox without an icon
var textBoxObj = new ej.inputs.TextBox({
    placeholder: 'Enter Date',
  });
  textBoxObj.appendTo('#textbox');
  
  // Second TextBox with an icon
  let iconTextBox = new ej.inputs.TextBox({
    placeholder: 'Enter Date',
    created: () => {
      iconTextBox.addIcon('append', 'e-date-icon');
    },
  });
  iconTextBox.appendTo('#textboxicon');