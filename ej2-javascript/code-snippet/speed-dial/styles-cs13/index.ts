

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

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
    target: '#targetElement',
    cssClass: 'custom-css'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');


