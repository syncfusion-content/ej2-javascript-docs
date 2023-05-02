

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items with icon only
let items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut', title: 'Cut' },
    { iconCss: 'e-icons e-copy', title: 'Copy' },
    { iconCss: 'e-icons e-paste', title: 'Paste' }
];

// Initialize the SpeedDial control
let speedDial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e-icons e-close',
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');


