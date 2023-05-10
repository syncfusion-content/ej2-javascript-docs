


import { Slider, SliderTickEventArgs, SliderTooltipEventArgs } from '@syncfusion/ej2-inputs';

// Initialize slider control
 let timeObj: Slider = new Slider({
    /**
     * Initialize the min and max values of the slider using JavaScript date functions
     * new Date (Year, Month, day, hours, minutes, seconds, milliseconds)
     */

    min: new Date(2013, 6, 13, 11).getTime(),
    max: new Date(2013, 6, 13, 17).getTime(),
    value: new Date(2013, 6, 13, 13).getTime(),
    // 3600000 milliseconds = 1 Hour
    step: 3600000,
    tooltipChange: function (args: SliderTooltipEventArgs) {
        let totalMiliSeconds = Number(args.text);
        let custom = { hour: '2-digit', minute: '2-digit' };
        args.text = new Date(totalMiliSeconds).toLocaleTimeString("en-us", custom);
    },
    tooltip: {
        placement: 'Before',
        isVisible: true
    },
    renderingTicks: function (args: SliderTickEventArgs) {
        let totalMiliSeconds = Number(args.value);
        let custom = { hour: '2-digit', minute: '2-digit' };
        args.text = new Date(totalMiliSeconds).toLocaleTimeString("en-us", custom);
    },
    ticks: {
        placement: 'After',
        // 2 * 3600000 milliseconds = 2 Hour
        largeStep: 2 * 3600000
    },
    showButtons: true
});
// Render initialized slider
timeObj.appendTo('#slider');



