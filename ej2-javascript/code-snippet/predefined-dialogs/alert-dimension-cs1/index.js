ej.base.enableRipple(true);

var alertBtn = new ej.buttons.Button({ cssClass: 'e-danger' });
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.alert({
        title: 'Not enough space',
        width: '300px',
        height: '200px',
        content: 'Delete certain files to free up space to store more items.',
    });
};


