ej.base.enableRipple(true);
var firstDialog = new ej.popups.Dialog ({
    // Enables the header
    header: 'Position-01',
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog content
    content: 'The dialog is positioned at {X: 420, Y: 14} coordinates',
    //Dialog height
    height: '120px',
    //Dialog width
    width: '360px',
    position: { X: 420, Y: 14 },
    animationSettings: { effect: 'None' }
});

// Render initialized outer Dialog
firstDialog.appendTo('#firstDialog');

var secondDialog = new ej.popups.Dialog ({
    // Enables the header
    header: 'Position-02',
    animationSettings: { effect: 'None' },
    // Dialog content
    content: 'The dialog is positioned at {X: 420, Y: 240} coordinates',
    // The Dialog shows within the target element
    target: document.getElementById("container"),
    // Dialog height
    height: '120px',
    // Dialog Width
    width: '360px',
    position: { X: 420, Y: 240 }
});

// Render initialized inner Dialog
secondDialog.appendTo('#secondDialog');


