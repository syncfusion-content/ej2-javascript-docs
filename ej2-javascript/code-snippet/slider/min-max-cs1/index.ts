


import { Slider } from '@syncfusion/ej2-inputs';

// Initialize Slider control
 let rangeObj: Slider = new Slider({
        ticks: { placement: 'After', largeStep: 200, smallStep: 100, showSmallTicks: true },
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
        // Minimum value
        min: 100,
        // Maximum value
        max: 1000,
        // Slider current value
        value: 400
    });
    // Render initialized Slider
    rangeObj.appendTo('#slider');



