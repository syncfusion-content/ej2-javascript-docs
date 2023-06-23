ej.base.enableRipple(true);

// Initialization of Dialog component
var dialog = new ej.popups.Dialog({
    buttons: [
        {
            // Click the footer buttons to hide the Dialog
            'click': function () {
                dialog.hide();
            },
            // Accessing button component properties by buttonModel property
            buttonModel: {
                //Enables the primary button
                isPrimary: true,
                content: 'OK'
            }
        },
        {
            'click': function () {
                dialog.hide();
            },
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat'
            }
        }
    ],
    // Dialog content
    content: 'This is a dialog without header',
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog width
    width: '250px',
});

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = function () {
    // Call the show method to open the Dialog
    dialog.show();
};

// Render initialized Dialog
dialog.appendTo('#dialog');

