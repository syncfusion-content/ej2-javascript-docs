ej.base.enableRipple(true);

var dialogObj = new ej.popups.Dialog({
    header: 'Delete Multiple Items',
    content: "Are you sure you want to permanently delete all of these items?",
    showCloseIcon: true,
    buttons: [{ buttonModel: { isPrimary: true, content: 'Yes' }, click: btnClick }, { buttonModel: { content: 'No' }, click: btnClick }],
    target: document.body,
    height: 'auto',
    width: '300px',
    animationSettings: { effect: 'Zoom' },
    closeOnEscape: true
});
dialogObj.appendTo('#dialog');

document.getElementById('openBtn').onclick = function () {
    dialogObj.show();
};

function btnClick() {
    dialogObj.hide();
}

document.onclick = function (args) {
    if (args.target.id === 'target') {
        dialogObj.hide();
    }
};

