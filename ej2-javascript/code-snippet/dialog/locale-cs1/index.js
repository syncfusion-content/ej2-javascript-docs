ej.base.enableRipple(true);

// Load French culture for Dialog close button tooltip text
ej.base.L10n.load({
    'fr-BE': {
       'dialog': {
             'close': "Fermer"
         }
     }
});

// Initialization of Dialog component
var dialog = new ej.popups.Dialog({
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
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = function() {
    // Call the show method to open the Dialog
     dialog.show();
}

