ej.base.enableRipple(true);

// Initialize the SpeedDial with applied warning style
var speeddial = new ej.buttons.SpeedDial({
    content: 'Edit',
    target: '#targetElement',
    cssClass: 'e-warning'
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');

