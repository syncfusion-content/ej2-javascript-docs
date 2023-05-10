// Initialize Slider component
var percentObj = new ej.inputs.Slider({
    min: 0, max: 1, value: .3, step: .01,
    // Assigning ticks values to percentage formatting
    ticks: { placement: 'After', largeStep: .2, smallStep: .1, showSmallTicks: true, format: 'P0' },
    // Assigning tooltip values to percentage formatting
    tooltip: { placement: 'Before', isVisible: true, showOn: 'Always', format: 'P0' },
});
// Render initialized Slider
percentObj.appendTo('#slider');

