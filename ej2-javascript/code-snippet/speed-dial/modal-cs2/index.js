ej.base.enableRipple(true);

// Initialize action items
var items = [
    { iconCss:'e-icons e-cut'},
    { iconCss:'e-icons e-copy'},
    { iconCss:'e-icons e-paste'}
];

// Initialize the SpeedDial control with modal
var speeddial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    target: '#targetElement',
    modal: true
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');

