


import { DialogUtility } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let alertBtn: Button = new Button({cssClass: 'e-danger'});
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = (): void => {
    // Initialize and render alert dialog
    DialogUtility.alert({
        title: 'Good job!',
        content: 'You clicked the alert button!',
        width:'250px',
        okButton: { text: 'Dismiss'}
    })
};



