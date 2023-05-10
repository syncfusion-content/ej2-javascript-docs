ej.base.enableRipple(true);

var dialogObj = new ej.popups.Dialog({
    header: 'Delete Multiple Items',
    content: "Are you sure you want to permanently delete all of these items?",
    showCloseIcon: true,
    footerTemplate: '<button id="Button1" class="e-control e-btn e-primary e-flat" data-ripple="true"><span class="e-btn-icon e-icons e-ok-icon e-icon-left"></span>Yes</button><button id="Button2" class="e-control e-btn e-flat" data-ripple="true"><span class="e-btn-icon e-icons e-close-icon e-icon-left"></span>No</button>',
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

document.getElementById('Button1').onclick = function () {
    dialogObj.hide();
};

document.getElementById('Button2').onclick = function () {
    dialogObj.hide();
};

