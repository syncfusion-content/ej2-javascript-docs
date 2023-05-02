ej.base.enableRipple(true);

// Initialize action items
var items = [
    { text:'Cut', iconCss:'e-icons e-cut'},
    { text:'Copy', iconCss:'e-icons e-copy'},
    { text:'Paste', iconCss:'e-icons e-paste'}
];

// Initialize the SpeedDial component
var speeddial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    content: 'Edit',
    target: '#targetElement',
    popupTemplate: '#popupTemplate'
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');

