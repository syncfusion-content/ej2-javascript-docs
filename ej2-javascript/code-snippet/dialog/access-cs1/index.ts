


import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize Dialog component
let dialog: Dialog = new Dialog({
    // Enables the header
    header: 'Feedback',
    // Dialog content
    content: document.getElementById("dlgContent"),
    // Enables the close icon in header
    showCloseIcon: true,
    // Enables the footer buttons
    buttons: [{
        // Accessing button component properties by buttonModel property
        buttonModel: {
            //Enables the primary button
            isPrimary: true,
            content: 'Submit',
            cssClass: 'e-flat',
        },
        // Click the footer buttons to hide the Dialog
        click: function () {
            this.hide();
        }
    }],
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '400px',
    // Dialog height
    height: '330px',
    beforeOpen: onBeforeopen
});
// Render initialized Dialog
dialog.appendTo('#dialog');
// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
    dialog.show();
};

function onBeforeopen(): void {
    document.getElementById('dlgContent').style.visibility = 'visible';
}



