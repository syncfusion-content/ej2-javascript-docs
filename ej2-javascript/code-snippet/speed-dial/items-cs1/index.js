ej.base.enableRipple(true);

// Initialize action items with icon only
var items = [
    { iconCss: 'e-icons e-cut', title: 'Cut' },
    { iconCss: 'e-icons e-copy', title: 'Copy' },
    { iconCss: 'e-icons e-paste', title: 'Paste' }
];

// Initialize the SpeedDial control
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e-icons e-close',
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');

