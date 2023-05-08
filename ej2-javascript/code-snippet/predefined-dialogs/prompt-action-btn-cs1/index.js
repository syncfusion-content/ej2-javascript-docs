ej.base.enableRipple(true);

var promptBtn = new ej.buttons.Button({isPrimary: true});
promptBtn.appendTo('#promptBtn');
document.getElementById('promptBtn').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.confirm({
        title: 'Join Chat Group',
        width: '300px',
        content: '<p>Enter your name: </p><input id= "inputEle" type="text" name="Required" class="e-input" placeholder="Type here.." />',
        okButton: { text: 'Connect'},
        cancelButton: {text:'Close'}
    });
};


