


import { Slider } from '@syncfusion/ej2-inputs';

// Initialize default Slider control
 let defaultObj: Slider = new Slider({
        value: 30
    });
    defaultObj.appendTo('#default');

    // Initialize minrange Slider control
    let minRangeObj: Slider = new Slider({
        value: 30,
        type: 'MinRange'
    });
    minRangeObj.appendTo('#minrange');

    // Initialize range Slider control
    let rangeObj: Slider = new Slider({
        value: [30, 70],
        type: 'Range'
    });
    rangeObj.appendTo('#range');



