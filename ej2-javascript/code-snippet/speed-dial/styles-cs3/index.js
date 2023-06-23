ej.base.enableRipple(true);

// Initialize the SpeedDial control with icon and text
var speeddial = new ej.buttons.SpeedDial({
    content: 'Edit',
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e- icons e-close',
    target: '#targetElement'
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');

