ej.base.enableRipple(true);

var readonlyTextBox = new ej.inputs.TextBox({
    placeholder: 'Input with warning',
    readonly: true,
  });
  readonlyTextBox.appendTo('#readonly');
  document
    .getElementById('setValueButton')
    .addEventListener('click', function () {
      readonlyTextBox.value = '10';
    });
  
  document
    .getElementById('clearValueButton')
    .addEventListener('click', function () {
      readonlyTextBox.value = ''; // Clear the value
    });

