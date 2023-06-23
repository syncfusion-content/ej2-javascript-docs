

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items
let items: SpeedDialItemModel[] = [
    { iconCss:'e-icons e-cut'},
    { iconCss:'e-icons e-copy'},
    { iconCss:'e-icons e-paste'}
];

// Initialize the SpeedDial control with modal
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    target: '#targetElement',
    modal: true
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');


