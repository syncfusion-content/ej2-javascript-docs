

import { DialogUtility } from '@syncfusion/ej2-popups';

document.getElementById('targetButton').onclick = (): void => {
    // Initialize and render alert dialog with options
    DialogUtility.alert({
        title: 'Alert Dialog',
        content: "This is an Alert Dialog!",
        okButton: {  text: 'OK', click: okClick.bind(this) },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });
};

function okClick(): void {
    alert('you clicked OK button');
}



