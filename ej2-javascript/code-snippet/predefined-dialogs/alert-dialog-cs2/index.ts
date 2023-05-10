


import { DialogUtility } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let alertBtn: Button = new Button({cssClass: 'e-danger'});
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = (): void => {
    document.getElementById("statusText").style.display="none";
    // Initialize and render alert dialog
    let alertDialogObj = DialogUtility.alert({
        title: 'Low Battery',
        width: '250px',
        content: '10% of battery remaining',
        okButton: {click:alertBtnClick.bind(this)},
    })

    function alertBtnClick () {
        alertDialogObj.hide();
        document.getElementById("statusText").innerHTML="The user closed the Alert dialog."
        document.getElementById("statusText").style.display="block";
    };
};



