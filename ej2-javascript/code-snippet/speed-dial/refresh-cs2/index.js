ej.base.enableRipple(true);

// Initialize action items
var items = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
];

// Initialize the SpeedDial control
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e-icons e-close',
    position: 'MiddleRight',
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');

// Refresh button click event handler
document.getElementById('refresh').addEventListener('click', function () {
    document.getElementById("targetElement").style.minHeight = "300px";
    speedDial.refreshPosition();
});

