// Initialize Range Slider Control
var squareSlider = new ej.inputs.Slider({
    // Set the value for slider
    value: 30,
    min: 0, max: 100
});
squareSlider.appendTo('#square_slider');
// Initialize Range Slider Control
var circleSlider = new ej.inputs.Slider({
    // Set the value for slider
    value: 30,
    // Set slider minimum and maximum values
    min: 0, max: 100
});
circleSlider.appendTo('#circle_slider');
// Initialize Range Slider Control
var ovalSlider = new ej.inputs.Slider({
    // Set the value for slider
    value: 30,
    // Set slider minimum and maximum values
    min: 0, max: 100
});
ovalSlider.appendTo('#oval_slider');
// Initialize Range Slider Control
var imageSlider = new ej.inputs.Slider({
    // Set the value for slider
    value: 30,
    // Set slider minimum and maximum values
    min: 0, max: 100,
    ticks: { placement: 'After' }
});
imageSlider.appendTo('#image_slider');