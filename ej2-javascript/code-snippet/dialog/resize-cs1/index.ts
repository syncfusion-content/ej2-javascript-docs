


import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

let dialog = new Dialog({
    // Enables the draggable option
    allowDragging: true,
    // Enables the resize option
    enableResize: true,
    // Enables resize in all the direction
    resizeHandles: ['All'],
    // Enables the header
    header: 'Dialog',
    // Dialog content
    content: 'This is a Dialog with resize enabled',
    // Enables the draggable option
    allowDragging: true,
    // Enables the footer buttons,
    buttons: [
        {
            // Click the footer buttons to hide the Dialog
            'click': () => {
                dialog.hide();
            },
            // Accessing button component properties by buttonModel property
            buttonModel:{
                //Enables the primary button
                isPrimary: true,
                content:'OK'
            }
        },
        {
            'click': () => {
                dialog.hide();
            },
            buttonModel:{
                content:'Cancel',
                cssClass:'e-flat'
            }
        }
    ],
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px',
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
     dialog.show();
}


