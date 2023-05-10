

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items
let items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
];

// Initialize the SpeedDial control in linear mode
let linearSpeeddial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    mode: 'Linear',
    direction: 'Left',
    target: '#targetElement'
});

// Render initialized SpeedDial
linearSpeeddial.appendTo('#speeddial');


