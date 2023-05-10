

import { Dialog } from '@syncfusion/ej2-popups';
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Load French culture for Dialog close button tooltip text
L10n.load({
    'fr-BE': {
       'dialog': {
             'close': "Fermer"
         }
     }
});

// Initialization of Dialog component
let dialog = new Dialog({
    // Set the locale culture
    locale: 'fr-BE',
    // Enables the header
    header: 'Dialogue',
    // Enables the close icon button in header
    showCloseIcon: true,
    // Dialog content
    content: 'Dialogue avec la culture française',
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


