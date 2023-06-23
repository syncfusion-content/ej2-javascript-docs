ej.base.enableRipple(true);

//Name and Value attribute in form submit.
var checkbox = new ej.buttons.CheckBox({ name: 'Sport',  value: 'Cricket', label: 'Cricket', checked: true });
checkbox.appendTo('#checkbox1');

checkbox = new ej.buttons.CheckBox({ name: 'Sport',  value: 'Hockey', label: 'Hockey', checked: true });
checkbox.appendTo('#checkbox2');

checkbox = new ej.buttons.CheckBox({ name: 'Sport',  value: 'Tennis', label: 'Tennis', disabled: true });
checkbox.appendTo('#checkbox3');

checkbox = new ej.buttons.CheckBox({ name: 'Sport',  value: 'Basketball', label: 'Basketball' });
checkbox.appendTo('#checkbox4');

var button = new ej.buttons.Button({ isPrimary: true });
button.appendTo('#btnElement');

