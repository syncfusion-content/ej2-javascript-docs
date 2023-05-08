ej.base.enableRipple(true);

var alertBtn = new ej.buttons.Button({ cssClass: 'e-danger' });
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.alert({
        title: 'About SYNCFUSION Succinctly Serires',
        content: 'The Succinctly series was born in 2012.',
        cssClass: 'customClass'
    });
};


