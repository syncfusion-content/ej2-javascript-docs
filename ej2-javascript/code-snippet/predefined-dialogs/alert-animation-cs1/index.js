ej.base.enableRipple(true);

var alertBtn = new ej.buttons.Button({ cssClass: 'e-danger' });
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.alert({
        title: 'Low Battery',
        width: '250px',
        animationSettings: { effect: 'Zoom' },
        content: '10% of battery remaining',
        position: { X: 'center', Y: 'center' }
    });
};



