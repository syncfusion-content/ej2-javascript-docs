ej.base.enableRipple(true);

// Initialize RadioButton component.
var radiobutton = new ej.buttons.RadioButton({ label: 'Option 1', name: 'default', checked: true, change: onChange });

// Render initialized RadioButton.
radiobutton.appendTo('#element1');

radiobutton = new ej.buttons.RadioButton({ label: 'Option 2', name: 'default', disabled: 'true', change: onChange });
radiobutton.appendTo('#element2');

radiobutton = new ej.buttons.RadioButton({ label: 'Option 3', name: 'default', change: onChange });
radiobutton.appendTo('#element3');

function onChange(args) { 
   document.getElementById('text').innerText = 'Selected : ' + this.label;
}

