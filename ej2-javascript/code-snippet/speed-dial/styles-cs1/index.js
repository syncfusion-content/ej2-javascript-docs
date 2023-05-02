ej.base.enableRipple(true);

// Initialize the SpeedDial control with icon only
var speeddial = new ej.buttons.SpeedDial({
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e- icons e-close',
    target: '#targetElement'
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');

