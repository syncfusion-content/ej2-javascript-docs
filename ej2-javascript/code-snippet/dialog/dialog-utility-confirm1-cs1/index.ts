

import { DialogUtility } from '@syncfusion/ej2-popups';

//  Initialize and render Confirm dialog with options
document.getElementById('targetButton').onclick = (): void => {
    DialogUtility.confirm({
        title: ' Confirmation Dialog',
        content: "This is a Confirmation Dialog!",
        okButton: {  text: 'OK', click: okClick.bind(this) },
        cancelButton: {  text: 'Cancel', click: cancelClick.bind(this)},
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });
};

function okClick(): void {
    alert('you clicked OK button');
}

function cancelClick(): void {
  alert('you clicked Cancel button');
}



