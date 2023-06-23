// Initialize slider component
var timeObj = new ej.inputs.Slider({
    /**
     * Initialize the min and max values of the slider using JavaScript date functions
     * new Date (Year, Month, day, hours, minutes, seconds, milliseconds)
     */
    min: new Date(2013, 6, 13, 11).getTime(),
    max: new Date(2013, 6, 13, 17).getTime(),
    value: new Date(2013, 6, 13, 13).getTime(),
    // 3600000 milliseconds = 1 Hour
    step: 3600000,
    tooltipChange: function (args) {
        var totalMiliSeconds = Number(args.text);
        var custom = { hour: '2-digit', minute: '2-digit' };
        args.text = new Date(totalMiliSeconds).toLocaleTimeString("en-us", custom);
    },
    tooltip: {
        placement: 'Before',
        isVisible: true
    },
    renderingTicks: function (args) {
        var totalMiliSeconds = Number(args.value);
        var custom = { hour: '2-digit', minute: '2-digit' };
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


