


import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple } from '@syncfusion/ej2-base';
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

enableRipple(true);

// Initialize Dialog component
let dialog = new Dialog({
    // Enables modal dialog
    isModal:true,
    // overlayClick event handler
    overlayClick: onOverlayClick,
    // Dialog content
    content: document.getElementById("defaultRTE"),
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '500px',
    open: dlgopen
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = (): void => {
    // Call the show method to open the Dialog
    dialog.show();
}

// Sample level code to hide the Dialog when click the Dialog overlay
function onOverlayClick() {
    dialog.hide();
}

let defaultRTE: RichTextEditor = new RichTextEditor( );
defaultRTE.appendTo('#defaultRTE');

function dlgopen() {
    defaultRTE.refreshUI();

}



