// Initialize Range Slider Control
var kilometerObj = new ej.inputs.Slider({
    min: 0, max: 100, step: 1, value: 30,
    // Apply two decimal specifiers formatting if any decimal values are processed with 'Km' text appended to the value
    tooltip: { isVisible: true, format: '##.## Km' },
    // Apply two decimal specifiers formatting if any decimal values are processed with 'Km' text appended to the value
    ticks: { placement: 'After', format: '##.## Km', largeStep: 20, smallStep: 10, showSmallTicks: true }
});
// Render initialized Range Slider Control
kilometerObj.appendTo('#slider');
// Initialize Range Slider Control
var decimalObj = new ej.inputs.Slider({
    min: 0.1, max: .2, step: 0.01, value: 0.13,
    // Apply three decimal specifiers formatting if any decimal values are processed then reset will be appended with two zero
    tooltip: { isVisible: true, format: '##.#00' },
    // Apply three decimal specifiers formatting if any decimal values are processed then reset will be appended with two zero
    ticks: { placement: 'After', format: '##.#00', largeStep: 0.02, smallStep: 0.01, showSmallTicks: true }
});
// Render initialized Range Slider Control
decimalObj.appendTo('#slider1');
// Initialize Range Slider Control
var sliderObj = new ej.inputs.Slider({
    min: 0, max: 100, step: 1, value: 30,
    // Apply numeric formatting with two leading zero for tooltip
    tooltip: { isVisible: true, format: '00##' },
    // Apply numeric formatting with two leading zero for ticks
    ticks: { placement: 'After', format: '00##', largeStep: 20, smallStep: 10, showSmallTicks: true }
});
// Render initialized Range Slider Control
sliderObj.appendTo('#slider2');