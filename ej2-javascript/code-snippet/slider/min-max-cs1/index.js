// Initialize Slider component
var rangeObj = new ej.inputs.Slider({
    ticks: { placement: 'After', largeStep: 200, smallStep: 100, showSmallTicks: true },
    tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
    // Minimum value
    min: 100,
    // Maximum value
    max: 1100,
    // Slider current value
    value: 400
});
// Render initialized Slider
rangeObj.appendTo('#slider');

