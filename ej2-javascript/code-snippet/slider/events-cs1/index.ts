


import { Slider, SliderTickEventArgs, SliderTooltipEventArgs } from '@syncfusion/ej2-inputs';

// Initialize Slider control
 let eventObj: Slider = new Slider({
        // Minimum value
        min: 0,
        // Maximum value
        max: 6,
        // Slider current value
        value: 2,
        // Assigning ticks data
        ticks: {
            placement: 'After',
            largeStep: 1
        },
        renderingTicks: function (args: SliderTickEventArgs) {
                // Weekdays Array
                let daysArr: string [] = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
                // Customizing each ticks text into weeksdays
                args.text = daysArr[parseFloat(args.value as any)];
        },
        tooltipChange: function (args: SliderTooltipEventArgs) {
                // Customizing tooltip to display the Day (in numeric) of the week
                args.text =  'Day ' + (Number(args.value) + 1).toString();
        },
        // Assigning tooltip data
        tooltip: {
            placement: 'Before',
            isVisible: true
        }
    });
    // Render initialized Slider
    eventObj.appendTo('#slider');



