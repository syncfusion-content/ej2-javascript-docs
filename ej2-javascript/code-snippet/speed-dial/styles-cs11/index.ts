

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

// Initialize action items with tooltip
let items: SpeedDialItemModel[] = [
    { iconCss:'e-icons e-cut', title: 'Cut' },
    { iconCss:'e-icons e-copy', title: 'Copy' },
    { iconCss:'e-icons e-paste', title: 'Paste' }
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({
    openIconCss: 'e-icons e-edit',
    items: items,
    target: '#targetElement',
    title: 'Edit'
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');


