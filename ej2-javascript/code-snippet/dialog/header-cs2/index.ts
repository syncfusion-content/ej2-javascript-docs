

import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialization of Dialog component
let dialog = new Dialog({
            // Enables the header
            header: 'Dialog',
            // Enables the close icon button in header
            showCloseIcon: true,
            // Dialog content
            content: 'This is a dialog with header',
            // The Dialog shows within the target element
            target: document.getElementById("container"),
            // Dialog width
            width: '250px',
});

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
     dialog.show();
}
// Render initialized Dialog
dialog.appendTo('#dialog');


