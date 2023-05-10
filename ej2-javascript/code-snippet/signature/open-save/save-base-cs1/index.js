ej.base.enableRipple = true;

var signature = new ej.inputs.Signature({}, '#signature');

var dialogObj = new ej.popups.Dialog({
        header: 'Base64 of the signature',
        height: 'auto',
        animationSettings: { effect: 'Zoom', duration: 400 },
        showCloseIcon: true,
        width: '80%',
        visible: false
});
dialogObj.appendTo('#defaultdialog');

document.getElementById('save').onclick = function() {
    dialogObj.content = signature.getSignature();
    dialogObj.show();
}

