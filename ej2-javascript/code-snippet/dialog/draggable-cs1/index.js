ej.base.enableRipple(true);

var dialog = new ej.popups.Dialog({
    // Enables the draggable option
    allowDragging: true,
    // Enables the header
    header: 'Dialog',
    // Dialog content
    content: 'This is a Dialog with drag enabled',
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
                content:'Cancel'
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
document.getElementById('targetButton').onclick = function() {
    // Call the show method to open the Dialog
     dialog.show();
}

