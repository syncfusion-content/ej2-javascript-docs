ej.base.enableRipple(true);

//Small RadioButton.
var radiobutton = new ej.buttons.RadioButton({ label: 'Small', name: 'size', checked: true, cssClass: 'e-small' });
radiobutton.appendTo('#radiobutton1');

//Default RadioButton.
radiobutton = new ej.buttons.RadioButton({ label: 'Default', name: 'size' });
radiobutton.appendTo('#radiobutton2');

