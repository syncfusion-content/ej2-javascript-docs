// Initialize Slider component
var sliderObj = new ej.inputs.Slider({
    min: 0, max: 100, step: 1, value: 30,
    // Applying currency formatting for tooltip with two decimal specifiers
    tooltip: { isVisible: true, format: 'C2' },
    // Applying currency formatting for ticks with two decimal specifiers
    ticks: { placement: 'After', format: 'C2', largeStep: 20, smallStep: 10, showSmallTicks: true }
});
// Render initialized Slider
sliderObj.appendTo('#slider');

