

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text:'Cut', iconCss:'e-icons e-cut'},
    { text:'Copy', iconCss:'e-icons e-copy'},
    { text:'Paste', iconCss:'e-icons e-paste'}
];

// Initialize the SpeedDial control
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    content: 'Edit',
    target: '#targetElement',
    popupTemplate: '#popupTemplate'
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');


