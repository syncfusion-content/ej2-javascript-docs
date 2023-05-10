

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items with disabled first item.
let items: SpeedDialItemModel[] = [
    { text: 'Cut', disabled: true },
    { text: 'Copy' },
    { text: 'Paste' }
];

// Initialize the SpeedDial control
let speedDial: SpeedDial = new SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');


