ej.base.enableRipple(true);

//To change the Button type.
var button = new ej.buttons.Button({ isPrimary: true, content: "Button" });
button.appendTo('#element');

button.element.setAttribute("title", "Primary Button");

