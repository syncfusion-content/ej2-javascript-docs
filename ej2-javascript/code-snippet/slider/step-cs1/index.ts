


import { Slider } from '@syncfusion/ej2-inputs';

// Initialize Slider control
 let rangeObj: Slider = new Slider({
        ticks: { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true },
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
        value: 30,
        // Enables step
        step: 10
    });
    // Render initialized Slider
    rangeObj.appendTo('#slider');



