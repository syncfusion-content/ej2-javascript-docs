ej.base.enableRipple(true);

//Label position - Left.
var radiobutton = new ej.buttons.RadioButton({ label: 'Left Side Label', name: 'position', labelPosition: 'Before' });
radiobutton.appendTo('#radiobutton1');

//Label position - Right.
radiobutton = new ej.buttons.RadioButton({ label: 'Right Side Label', name: 'position', checked: true });
radiobutton.appendTo('#radiobutton2');

