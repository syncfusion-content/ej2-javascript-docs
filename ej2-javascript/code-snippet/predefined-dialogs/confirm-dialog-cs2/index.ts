


import { DialogUtility } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let confirmBtn: Button = new Button({cssClass: 'e-success'});
confirmBtn.appendTo('#confirmBtn');
document.getElementById('confirmBtn').onclick = (): void => {
    document.getElementById("statusText").style.display="none";
    let comfirmDialogObj = DialogUtility.confirm({
        title: 'Confirmation Dialog',
        content: "This is a Confirmation Dialog!",
        width: '300px',
        okButton: {  text: 'OK', click: confirmOkAction.bind(this) },
        cancelButton: {  text: 'Cancel', click: confirmCancelAction.bind(this)},
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



