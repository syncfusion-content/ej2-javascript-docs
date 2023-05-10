ej.base.enableRipple(true);

// Initialize Dialog component
var dialog = new ej.popups.Dialog({
    //Animation options
    animationSettings: {
        effect: 'Zoom',
        duration: 400,
        delay: 0
    },
    // Enables the header
    header: 'Dialog',
    // Dialog content
    content: 'Dialog enabled with Zoom effect',
    // Enables the footer buttons
    buttons: [
        {
            // Click the footer buttons to hide the Dialog
            'click': () => { dialog.hide(); },
            // Accessing button component properties by buttonModel property
            buttonModel: {
                content: 'OK',
                isPrimary: true
            }
        },
        {
            'click': () => { dialog.hide(); },
            buttonModel: {
                content: 'Cancel'
            }
        }
    ],
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px'
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = function() {
    // Call the show method to open the Dialog
    dialog.show();
}


