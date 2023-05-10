


import { DialogUtility } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let alertBtn: Button = new Button({cssClass: 'e-danger'});
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = (): void => {
    // Initialize and render alert dialog
    DialogUtility.alert({
        title: 'Not enough space',
        width: '300px',
        height: '200px',
        content: 'Delete certain files to free up space to store more items.',
    });
};



