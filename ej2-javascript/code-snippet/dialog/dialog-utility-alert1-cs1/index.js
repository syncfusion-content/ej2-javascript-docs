ej.base.enableRipple(true);

document.getElementById('targetButton').onclick = function(){
    // Initialize and render alert dialog with options
    ej.popups.DialogUtility.alert({
        title: 'Alert Dialog',
        content: "This is an Alert Dialog!",
        okButton: {  text: 'OK', click: okClick },
        showCloseIcon: true,
        closeOnEscape: true,
        animationSettings: { effect: 'Zoom' }
    });
};

function okClick(){
    alert('you clicked OK button');
}

