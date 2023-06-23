


import { Slider } from '@syncfusion/ej2-inputs';

// Initialization of Slider
let slider: Slider = new Slider({
    min: 0,
    max: 100,
    type: 'Range',
    value: [30, 70],
    limits: { enabled: true, startHandleFixed: true, endHandleFixed: true },
    tooltip: { isVisible: true }
});
// Render initialized Slider
slider.appendTo('#slider');



