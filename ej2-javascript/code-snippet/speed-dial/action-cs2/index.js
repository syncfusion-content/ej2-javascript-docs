ej.base.enableRipple(true);

// Initialize action items
var items = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
];

// Initialize SpeedDial control with clicked event
var speeddial = new ej.buttons.SpeedDial({
    items: items, 
    content:'Edit', 
    target: '#targetElement',
    clicked: actionClicked
});

// Render initialized SpeedDial.
speeddial.appendTo('#speeddial');

function actionClicked(args) {
    alert(args.item.text + " is clicked");
}

