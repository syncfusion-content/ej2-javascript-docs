


import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize Dialog component
let dialog = new Dialog({
    // Enables the header
    header: 'Dialog',
    // Dialog content
    content: document.getElementById("dlgContent"),
    // Disable the Esc key to hide the Dialog
    closeOnEscape: false,
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px',
    beforeOpen: onBeforeopen
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to prevent Dialog scrolling
document.getElementById('targetButton').onclick = (): void => {
    dialog.cssClass = 'e-fixed';
}

function onBeforeopen(): void {
    document.getElementById('dlgContent').style.visibility = 'visible';
}



