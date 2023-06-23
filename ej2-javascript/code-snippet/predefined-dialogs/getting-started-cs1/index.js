ej.base.enableRipple(true);

var alertBtn = new ej.buttons.Button({ cssClass: 'e-danger' });
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.alert({
        // Dialog Title
        title: 'Low Battery',
        // Dialog Content
        content: '10% of battery remaining',
        // Dialog width
        width: '250px'
    });
};





