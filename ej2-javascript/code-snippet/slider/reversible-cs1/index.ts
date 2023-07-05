


import { Slider } from '@syncfusion/ej2-inputs';

// Initialize Slider control
 let sliderObj: Slider = new Slider({
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
    type: 'Range',
    // vertical orientation
    orientation: 'Vertical',
    // Set maximum value to min
    min: 100,
    // Set minimum value to max
    max: 0,
    // Slider current value
    value: [30, 70]
});
// Render initialized Slider
sliderObj.appendTo('#slider');




