ej.base.enableRipple = true;

var signature = new ej.inputs.Signature({}, '#signature');

var button = new ej.buttons.Button({cssClass: 'e-primary'}, '#set');

button.element.onclick = function (e) {
    var bgColor = document.getElementById('text').value;
    signature.backgroundColor = bgColor;
};

