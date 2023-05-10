

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items
let items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
];

// Initialize the SpeedDial control
let speedDial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e-icons e-close',
    position: 'MiddleRight'
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');

// Refresh button click event handler
document.getElementById('refresh').addEventListener('click', function () {
    document.getElementById("targetElement").style.minHeight = "300px";
    speedDial.refreshPosition();
});


