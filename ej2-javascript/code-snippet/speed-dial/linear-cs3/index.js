ej.base.enableRipple(true);

// Initialize action items
var items = [
    { iconCss:'e-icons e-cut'},
    { iconCss:'e-icons e-copy'},
    { iconCss:'e-icons e-paste'}
];

// Initialize the SpeedDial component in linear mode
var linearSpeeddial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss:'e-icons e-edit',
    mode: 'Linear',
    direction: 'Left',
    target: '#targetElement'
});

// Render initialized SpeedDial
linearSpeeddial.appendTo('#speeddial');

