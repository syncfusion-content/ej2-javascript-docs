

import { SpeedDial } from '@syncfusion/ej2-buttons';

// Initialize the SpeedDial control with icon only
let speeddial: SpeedDial = new SpeedDial({
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e- icons e-close',
    target: '#targetElement'
});

// Render initialized SpeedDial
speeddial.appendTo('#speeddial');


