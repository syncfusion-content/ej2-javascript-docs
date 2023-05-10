

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';

// Initialize the SpeedDial with applied warning style
let speeddial: SpeedDial = new SpeedDial({
    content: 'Edit',
    target: '#targetElement',
    cssClass: 'e-warning'
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');


