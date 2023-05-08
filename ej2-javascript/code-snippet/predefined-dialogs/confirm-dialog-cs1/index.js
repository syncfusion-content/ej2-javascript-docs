ej.base.enableRipple(true);

var confirmBtn = new ej.buttons.Button({cssClass: 'e-success'});
confirmBtn.appendTo('#confirmBtn');
document.getElementById('confirmBtn').onclick = function () {
    document.getElementById("statusText").style.display="none";
    var comfirmDialogObj  = ej.popups.DialogUtility.confirm({
        title: 'Delete File',
        content: "Are you sure you want to permanently delete these file?",
        width: '300px',
        okButton: { text: 'OK', click: confirmOkAction.bind(this) },
        cancelButton: { text: 'Cancel', click: confirmCancelAction.bind(this) },
    });
    function confirmOkAction() {
        comfirmDialogObj.hide();
        document.getElementById("statusText").innerHTML = "The user confirmed the dialog box";
        document.getElementById("statusText").style.display = "block";
    }
    function confirmCancelAction() {
        comfirmDialogObj.hide();
        document.getElementById("statusText").innerHTML = "The user canceled the dialog box";
        document.getElementById("statusText").style.display = "block";
    }
};

