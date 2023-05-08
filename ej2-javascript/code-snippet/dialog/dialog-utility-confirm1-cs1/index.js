ej.base.enableRipple(true);

document.getElementById('targetButton').onclick = function(){
// Initialize and render confirm dialog with custom options

ej.popups.DialogUtility.confirm({
        title: ' Confirmation Dialog',
        content: "This is a Confirmation Dialog!",
        okButton: {  text: 'OK', click: okClick },
        cancelButton: {  text: 'Cancel', click: cancelClick },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });
};

function okClick(){
    alert('you clicked OK button');
    //Hide the dialog
    this.hide();
}

function cancelClick(){
    alert('you clicked Cancel button');
}

