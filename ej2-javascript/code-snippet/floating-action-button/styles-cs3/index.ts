

import { Fab } from "@syncfusion/ej2-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

    // Initialize the Floating Action Button control with applied warning style
    let warningbtn: Fab = new Fab({
        iconCss: 'e-icons e-edit',
        cssClass: 'e-warning',
        target: '#targetElement',
    })
    // Render initialized Floating Action Button
    warningbtn.appendTo('#fab')


