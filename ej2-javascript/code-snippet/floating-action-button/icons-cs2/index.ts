

import { Fab } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Floating Action Button control
let fab: Fab = new Fab({
    iconCss: 'fab-icons fab-icon-people',
    content:'Contacts',
    target: '#targetElement',
    iconPosition: 'Right'
});

// Render initialized Floating Action Button
fab.appendTo('#fab');


