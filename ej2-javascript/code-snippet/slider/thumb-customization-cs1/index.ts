


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { Slider } from '@syncfusion/ej2-inputs';

    // Initialize slider control
    let squareSlider: Slider = new Slider({
        // Set the value for slider
        value: 30,
        min: 0, max: 100
    });
    squareSlider.appendTo('#square_slider');

    // Initialize slider control
    let circleSlider: Slider = new Slider({
        // Set the value for slider
        value: 30,
        // Set slider minimum and maximum values
        min: 0, max: 100
    });
    circleSlider.appendTo('#circle_slider');

    // Initialize slider control
    let ovalSlider: Slider = new Slider({
        // Set the value for slider
        value: 30,
        // Set slider minimum and maximum values
        min: 0, max: 100
    });
    ovalSlider.appendTo('#oval_slider');

    // Initialize slider control
    let imageSlider: Slider = new Slider({
        // Set the value for slider
        value: 30,
        // Set slider minimum and maximum values
        min: 0, max: 100,

        ticks: { placement: 'After' }

    });
    imageSlider.appendTo('#image_slider');


