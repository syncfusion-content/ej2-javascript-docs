ej.base.enableRipple(true);

// Initialize action items
var items = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
];

// Initialize the SpeedDial control
let speedDial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e-icons e-close',
    opensOnHover: true,
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');

