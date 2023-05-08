ej.base.enableRipple(true);

var confirmBtn = new ej.buttons.Button({cssClass: 'e-success'});
confirmBtn.appendTo('#confirmBtn');
document.getElementById('confirmBtn').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.confirm({
        title: 'Delete File',
        content: "Are you sure you want to permanently delete these file?",
        width: '300px',
        showCloseIcon : true,
        closeOnEscape : true
    });
};


