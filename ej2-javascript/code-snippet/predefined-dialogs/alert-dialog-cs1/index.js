ej.base.enableRipple(true);

var alertBtn = new ej.buttons.Button({ cssClass: 'e-danger' });
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = function () {
    document.getElementById("statusText").style.display="none";
    // Initialize and render alert dialog
    var alertDialogObj = ej.popups.DialogUtility.alert({
        title: 'Low Battery',
        width: '250px',
        content: '10% of battery remaining',
        okButton: { click: alertBtnClick.bind(this) },
        position: { X: 'center', Y: 'center' }
    });
    function alertBtnClick() {
        alertDialogObj.hide();
        document.getElementById("statusText").innerHTML = "The user closed the Alert dialog.";
        document.getElementById("statusText").style.display = "block";
    }
};

