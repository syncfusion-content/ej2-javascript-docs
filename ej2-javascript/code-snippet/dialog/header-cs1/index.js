ej.base.enableRipple(true);

// Initialization of Dialog component
var dialog = new ej.popups.Dialog({
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
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = function() {
    // Call the show method to open the Dialog
     dialog.show();
}



