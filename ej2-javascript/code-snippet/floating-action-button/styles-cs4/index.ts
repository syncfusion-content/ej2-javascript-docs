

import { Fab } from "@syncfusion/ej2-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Floating Action Button control
let fab: Fab = new Fab({
    iconCss: 'e-icons e-edit',
    content:'<span class="text-container"><span class="textEle">Edit</span></span>',
    cssClass: 'fab-hover',
    target: '#targetElement',
})
// Render initialized Floating Action Button
fab.appendTo('#fab')


