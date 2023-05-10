


import { Slider } from '@syncfusion/ej2-inputs';

// Initialize Slider control
 let rangeObj: Slider = new Slider({
        // Enable the button option in Slider
        showButtons: true,
        value: [30, 70],
        type: 'Range'
    });
    // Render initialized Slider
    rangeObj.appendTo('#slider');



