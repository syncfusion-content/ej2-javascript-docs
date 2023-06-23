// Initialize Slider component
var minRangeObj = new ej.inputs.Slider({
    ticks: { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true },
    tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
    value: 30,
    step: 10,
    type: 'MinRange',
    showButtons: true
});
// Render initialized Slider
minRangeObj.appendTo('#slider');
var weekdaysObj = new ej.inputs.Slider({
    min: 0, max: 6, step: 1, value: 2,
    // Assigning ticks data
    ticks: {
        placement: 'After',
        largeStep: 1,
    },
    renderingTicks: function (args) {
        // Weekdays Array
        var daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
        // Customizing each ticks text into weeksdays
        args.value = daysArr[parseFloat(args.value)];
    },
    // Assigning tooltip data
    tooltip: {
        placement: 'Before',
        isVisible: true,
    },
    tooltipChange: function (args) {
        // Customizing tooltip to display the Day (in numeric) of the week
        args.tooltipText = 'Day ' + (Number(args.tooltipText) + 1).toString();
    }
});
// Render initialized Slider
weekdaysObj.appendTo('#slider1');


