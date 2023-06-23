

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement'
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');


