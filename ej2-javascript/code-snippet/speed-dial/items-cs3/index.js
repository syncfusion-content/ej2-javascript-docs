ej.base.enableRipple(true);

// Initialize action items with icon and text
var items = [
    { text: 'Cut', iconCss: 'e-icons e-cut' },
    { text: 'Copy', iconCss: 'e-icons e-copy' },
    { text: 'Paste', iconCss: 'e-icons e-paste' }
];

// Initialize the SpeedDial control
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e-icons e-close',
    content: 'Edit',
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');

