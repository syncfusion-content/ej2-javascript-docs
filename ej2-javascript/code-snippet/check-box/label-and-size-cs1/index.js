ej.base.enableRipple(true);

//Label position - Left.
var checkbox = new ej.buttons.CheckBox({ label: 'Left Side Label', labelPosition: 'Before' });
checkbox.appendTo('#checkbox1');

//Label position - Right.
checkbox = new ej.buttons.CheckBox({ label: 'Right Side Label', checked: true });
checkbox.appendTo('#checkbox2');

