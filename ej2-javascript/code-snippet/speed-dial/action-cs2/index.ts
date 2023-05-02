

import { SpeedDial, SpeedDialItemModel, SpeedDialItemModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items
let items: SpeedDialItemModel[] = [
    { text: 'Cut'},
    { text: 'Copy'},
    { text: 'Paste'}
];

// Initialize the SpeedDial control with clicked event
let speeddial: SpeedDial = new SpeedDial({
    items: items,
    content: 'Edit',
    target: '#targetElement',
    clicked: (args:SpeedDialItemEventArgs)=> {
        alert(args.item.text + " is clicked");
    }
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');


