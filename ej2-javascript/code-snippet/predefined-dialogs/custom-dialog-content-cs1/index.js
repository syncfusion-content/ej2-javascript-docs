ej.base.enableRipple(true);

var promptBtn = new ej.buttons.Button({isPrimary: true});
promptBtn.appendTo('#promptBtn');
document.getElementById('promptBtn').onclick = function () {
    // Initialize and render alert dialog
    ej.popups.DialogUtility.confirm({
        title: 'Join Chat Group',
        content: '<p>Enter your name: </p><input id="name" />',
        width: '350x'
    });
    var inputobj = new ej.inputs.TextBox({
        placeholder: 'Type here..'
    });
    inputobj.appendTo('#name');
};


