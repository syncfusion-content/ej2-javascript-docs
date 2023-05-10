ej.base.enableRipple(true);

var alertBtn = new ej.buttons.Button({ cssClass: 'e-danger' });
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.alert({
        title: 'Good job!',
        content: 'You clicked the alert button!',
        okButton: { text: 'Dismiss'}
    });
};


