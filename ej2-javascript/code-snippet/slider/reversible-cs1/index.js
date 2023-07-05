// Initialize Slider component
var sliderObj = new ej.inputs.Slider({
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
    type: 'Range',
    // vertical orientation
    orientation: 'Vertical',
    // Set maximum value to min
    min: 100,
    // Set minimum value to max
    max: 0,
    // Slider current value
    value: [30, 70]
});
// Render initialized Slider
sliderObj.appendTo('#slider');


