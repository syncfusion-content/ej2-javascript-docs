ej.base.enableRipple = true;

var signature = new ej.inputs.Signature({}, '#signature');

var button = new ej.buttons.Button({cssClass: 'e-primary'}, '#open');

button.element.onclick = function (e) {
    var sign = document.getElementById('text').value;
    signature.load(sign);
};

