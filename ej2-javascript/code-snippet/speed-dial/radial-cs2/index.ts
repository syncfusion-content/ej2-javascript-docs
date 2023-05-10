

import { SpeedDial, SpeedDialItemModel, RadialSettingsModel } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

// Initialize action items
let items: SpeedDialItemModel[] = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
    { iconCss: 'e-icons e-edit' },
    { iconCss: 'e-icons e-save' }
];

// Initialize radial settings
let radialSettings: RadialSettingsModel = { offset: '80px', direction: 'AntiClockwise', startAngle: 90, endAngle: 270 };

// Initialize the SpeedDial control
let speedDial: SpeedDial = new SpeedDial({
    items: items,
    openIconCss: 'e-icons e-edit',
    target: '#targetElement',
    mode: 'Radial',
    position: 'MiddleRight',
    radialSettings: radialSettings
});

// Render initialized SpeedDial
speedDial.appendTo('#speeddial');


