ej.base.enableRipple(true);

var confirmBtn = new ej.buttons.Button({cssClass: 'e-success'});
confirmBtn.appendTo('#confirmBtn');
document.getElementById('confirmBtn').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.confirm({
        title: ' Delete Multiple Items',
        content: "Are you sure you want to permanently delete these items?",
        width: '300px',
        height: '200px'
    });
};


