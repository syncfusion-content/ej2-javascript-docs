// Initialize Range Slider Control
var rangeObj = new ej.inputs.Slider({
    ticks: { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true },
    tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
    value: 30,
    // Enables step
    step: 10
});
// Render initialized Range Slider Control
rangeObj.appendTo('#slider');