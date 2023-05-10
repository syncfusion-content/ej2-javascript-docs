


import { DialogUtility } from '@syncfusion/ej2-popups';
import { Button } from '@syncfusion/ej2-buttons';

let alertBtn: Button = new Button({cssClass: 'e-danger'});
alertBtn.appendTo('#alertBtn');
document.getElementById('alertBtn').onclick = (): void => {
    // Initialize and render alert dialog
    DialogUtility.alert({
        title: 'Low Battery',
        width: '250px',
        isDraggable: true,
        content: '10% of battery remaining',
    })
};



