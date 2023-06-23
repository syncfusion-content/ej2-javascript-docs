// Initialize Slider component
var sliderObj = new ej.inputs.Slider({
    tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
    value: 30,
    // Slider ticks customization
    ticks: { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true }
});
// Render initialized Slider
sliderObj.appendTo('#slider');


