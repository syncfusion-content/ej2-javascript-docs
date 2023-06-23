

import { Fab } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the Floating Action Button control.
let fab: Fab = new Fab({
    iconCss: 'e-icons e-edit',
    content:'Edit' });

// Render initialized Floating Action Button.
fab.appendTo('#fab');

//onclick event handler
fab.element.onclick = (): void => {
    alert("Edit is clicked!");
};


