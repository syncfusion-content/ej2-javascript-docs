ej.base.enableRipple(true);

// Initialize action items with disabled first item.
var items = [
    { text: 'Cut', disabled: true },
    { text: 'Copy' },
    { text: 'Paste' }
];

// Initialize the SpeedDial control
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');

