ej.base.enableRipple(true);

// Initialize Dialog component
var dialog = new ej.popups.Dialog({
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
document.getElementById('targetButton').onclick = function() {
    dialog.cssClass = 'e-fixed';
}

function onBeforeopen() {
    document.getElementById('dlgContent').style.visibility = 'visible';
}


