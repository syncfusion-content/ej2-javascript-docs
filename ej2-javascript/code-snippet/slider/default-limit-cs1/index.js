// Initialization of Slider
var slider = new ej.inputs.Slider({
    min: 0,
    max: 100,
    value: 30,
    type: 'MinRange',
    limits: { enabled: true, minStart: 10, minEnd: 40 },
    tooltip: { isVisible: true }
});
// Render initialized Range Slider Control
slider.appendTo('#slider');