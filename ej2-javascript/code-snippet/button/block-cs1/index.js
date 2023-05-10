ej.base.enableRipple(true);

//Block Button.
var button = new ej.buttons.Button({cssClass: `e-block`});
button.appendTo('#blockbtn');

//Primary Block Button.
button = new ej.buttons.Button({ isPrimary: true, cssClass: `e-block` });
button.appendTo('#primarybtn');

//Success Block Button.
button = new ej.buttons.Button({ cssClass: `e-block e-success` });
button.appendTo('#successbtn');

