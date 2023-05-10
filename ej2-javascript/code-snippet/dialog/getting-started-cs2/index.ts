


import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialization of Dialog
let dialog: Dialog = new Dialog({
    // Dialog content
    content: 'This is a Dialog with content',
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px'
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
     dialog.show();
}



