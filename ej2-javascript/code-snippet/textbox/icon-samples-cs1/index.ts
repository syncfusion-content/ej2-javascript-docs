 let iconTextBox = new ej.inputs.TextBox({
    placeholder: 'Enter Date',
    created: () => {
      iconTextBox.addIcon('append', 'e-date-icon');
      iconTextBox.addIcon('append', 'e-icons e-date-range');
    },
  });
  iconTextBox.appendTo('#textboxicon');