ej.base.enableRipple(true);

// Initialize action items
var items = [
    { iconCss:'e-icons e-cut'},
    { iconCss:'e-icons e-copy'},
    { iconCss:'e-icons e-paste'},
    { iconCss:'e-icons e-edit'},
    { iconCss:'e-icons e-save'}
];

// Initialize radial direction
var radialSettings = { offset: '80px', direction: 'AntiClockwise', startAngle: 90, endAngle: 270 };

// Initialize the SpeedDial component
var speedDial = new ej.buttons.SpeedDial({
    items: items,
    openIconCss:'e-icons e-edit',
    target: '#targetElement',
    mode: 'Radial',
    position: 'MiddleRight',
    radialSettings: radialSettings
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');

