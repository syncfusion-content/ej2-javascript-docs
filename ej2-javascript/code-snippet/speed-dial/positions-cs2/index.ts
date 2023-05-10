

import { SpeedDial, SpeedDialItemModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items
let items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' }
];

// Initialize the SpeedDial control
let speedDial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    closeIconCss: 'e-icons e-close',
    opensOnHover: true,
    target: '#targetElement'
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');

//Show and Hide button click event handler
document.getElementById('show').addEventListener('click', function () {
    speedDial.show();
});

document.getElementById('hide').addEventListener('click', function() {
    speedDial.hide();
});


