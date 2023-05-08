ej.base.enableRipple(true);

// Initialize Dialog component.
var dialog = new ej.popups.Dialog({
    width: '800px',
    showCloseIcon: true,
    position: { X: 'center', Y: 'center' },
    header: 'Dialog',
    created: onCreated,
    beforeOpen: onOpen,
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    visible:false,
});
// Render initialized Dialog.
dialog.appendTo('#dialog');
// Sample level code to handle the button click action.
document.getElementById('targetButton').onclick = function () {
    // Call the show method to open the Dialog.
    dialog.show();
}
function onCreated() {
    document.getElementById('dlgContent').style.display = 'block';
    dialog.refreshPosition();
}
function onOpen(args){
    // setting maxHeight to the Dialog.
    args.maxHeight = '300px';
}


