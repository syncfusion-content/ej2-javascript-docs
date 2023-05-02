ej.base.enableRipple(true);

// Initialize action items
var items = [
    { text: 'Cut', iconCss: 'e-icons e-cut' },
    { text: 'Copy', iconCss: 'e-icons e-copy' },
    { text: 'Paste', iconCss: 'e-icons e-paste' }
];

// Intialize animation effect 
var animation = { effect: 'Zoom' };

// Initialize the SpeedDial component
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss:'e-icons e-edit',
    closeIconCss:'e-icons e-close',
    content: 'Edit',
    animation: animation,
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');

