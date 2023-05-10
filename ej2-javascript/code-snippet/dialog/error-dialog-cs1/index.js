ej.base.enableRipple(true);

var dlgObj = new ej.popups.Dialog({
    header: 'File and Folder Rename',
    content: document.getElementById("dlgContent"),
    showCloseIcon: true,
    visible: false,
    buttons: [{
        buttonModel: { isPrimary: true, content: 'close' }, click:  function() { this.hide() }
    }],
    target: document.querySelector('body'),
    width: '400px',
    animationSettings: { effect: 'Zoom' },
    beforeOpen: onBeforeopen
});
dlgObj.appendTo('#dialog');

var button = new ej.buttons.Button({});
button.appendTo('#dialogButton');

document.getElementById('openBtn').onclick = function () {
    dlgObj.show();
};

function onBeforeopen() {
    document.getElementById('dlgContent').style.visibility = 'visible';
}

