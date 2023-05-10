ej.base.enableRipple = true;

var colorPicker = new ej.inputs.ColorPicker({}, '#element');

var target = colorPicker.element.nextElementSibling;
target.insertBefore(colorPicker.element, target.children[1]);

