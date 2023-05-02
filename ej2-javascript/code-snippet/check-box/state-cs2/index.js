ej.base.enableRipple(true);

//checked state.
var checkbox = new ej.buttons.CheckBox({ label: 'Checked State', checked: true });
checkbox.appendTo('#checkbox1');

//unchecked state.
checkbox = new ej.buttons.CheckBox({ label: 'Unchecked State' });
checkbox.appendTo('#checkbox2');

//indeterminate state.
checkbox = new ej.buttons.CheckBox({ label: 'Indeterminate State', indeterminate: true });
checkbox.appendTo('#checkbox3');

