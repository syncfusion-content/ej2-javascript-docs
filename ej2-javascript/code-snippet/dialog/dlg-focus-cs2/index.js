// Initialize the Dialog component using Syncfusion's Dialog class
var dialogObj = new ej.popups.Dialog({
    header: 'Delete Multiple Items',
    content: "Are you sure you want to permanently delete all of these items?",
    showCloseIcon: true,
    buttons: [
        { 
            buttonModel: { isPrimary: true, content: 'Yes' }, 
            click: btnClick
        },
        { 
            buttonModel: { content: 'No' }, 
            click: btnClick
        }
    ],
    // Specifies the target element where the dialog will be rendered
    target: document.body,
    height: 'auto',
    width: '300px',
    animationSettings: { effect: 'Zoom' },

    // Event triggered before the dialog closes
    beforeClose: function (args) {
        // Prevents the dialog from regaining focus after closing
        args.preventFocus = true;
    }
});

// Append the dialog to the DOM element with ID 'dialog'
dialogObj.appendTo('#dialog');
document.getElementById('openBtn').onclick = function () {
    dialogObj.show(); 
};

function btnClick() {
    dialogObj.hide(); 
}
