ej.base.enableRipple(true);

// Initialization of Dialog component
var dialog = new ej.popups.Dialog({
    header: "Sign In",
    buttons: [{ buttonModel: { isPrimary: true, content: 'Yes' }, click: btnClick }, { buttonModel: { content: 'No'}, click: btnClick }],
    target: document.getElementById("container"),
    height: 'auto',
    width: '300px',
    open: onOpen
});
// Render initialized Dialog
dialog.appendTo('#dialog');

// Sample level code to handle the button click action
document.getElementById('targetButton').onclick = function () {
    // Call the show method to open the Dialog
    dialog.show();
};

function btnClick() {
    dialog.hide();
}

function onOpen(args: OpenEventArgs) {
  //Preventing the default dialog focus
  args.preventFocus = true;
}

