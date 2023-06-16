ej.base.enableRipple(true);

// Initialize action items with tooltip
var items = [
    { iconCss:'e-icons e-cut', title: 'Cut' },
    { iconCss:'e-icons e-copy', title: 'Copy' },
    { iconCss:'e-icons e-paste', title: 'Paste' }
];

// Initialize the SpeedDial control
var speeddial = new ej.buttons.SpeedDial({
    openIconCss:'e-icons e-edit',
    items: items,
    target: '#targetElement'
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');

