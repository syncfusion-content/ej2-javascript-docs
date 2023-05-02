

import { SpeedDial, SpeedDialItemModel, SpeedDialAnimationSettingsModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items with icon and text
let items: SpeedDialItemModel[] = [
    { text: 'Cut', iconCss: 'e-icons e-cut' },
    { text: 'Copy', iconCss: 'e-icons e-copy' },
    { text: 'Paste', iconCss: 'e-icons e-paste' }
];

// Intialize animation effect
let animation: SpeedDialAnimationSettingsModel =
    { effect: 'Zoom' };

// Initialize the SpeedDial control
let speedDial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e-icons e-close',
    content: 'Edit',
    animation: animation,
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');


