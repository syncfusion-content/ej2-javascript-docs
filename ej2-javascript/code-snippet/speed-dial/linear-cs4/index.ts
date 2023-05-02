

import { SpeedDial } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize the SpeedDial control in BottomLeft position
let speedDial: SpeedDial = new SpeedDial({
    content: 'Add',
    position: 'BottomLeft',
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');


