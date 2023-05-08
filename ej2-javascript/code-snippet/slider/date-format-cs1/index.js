// Initialize slider component
var dateObj = new ej.inputs.Slider({
    /**
     * Initialize the min and max values of the slider using JavaScript date functions
     * new Date (Year, Month, day, hours, minutes, seconds, milliseconds)
     */
    min: new Date("2013-06-13").getTime(),
    value: new Date("2013-06-15").getTime(),
    max: new Date("2013-06-21").getTime(),
    // 86400000 milliseconds for a day
    step: 86400000,
    tooltipChange: function (args) {
        var totalMiliSeconds = Number(args.text);
        // Convert the current milliseconds to the respective date in desired format
        var custom = { year: "numeric", month: "short", day: "numeric" };
        args.text = new Date(totalMiliSeconds).toLocaleDateString("en-us", custom);
    },
    tooltip: {
        placement: 'Before',
        isVisible: true
    },
    renderingTicks: function (args) {
        var totalMiliSeconds = Number(args.value);
        // Convert the current milliseconds to the respective date in desired format
        var custom = { year: "numeric", month: "short", day: "numeric" };
        args.text = new Date(totalMiliSeconds).toLocaleDateString("en-us", custom);
    },
    ticks: {
        placement: 'After',
        // 2 * 86400000 milliseconds for two days
        largeStep: 2 * 86400000
    },
    showButtons: true
});
// Render initialized Slider
dateObj.appendTo('#slider');


