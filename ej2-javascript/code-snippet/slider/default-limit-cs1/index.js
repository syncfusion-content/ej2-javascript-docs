// Initialization of Slider
var slider = new ej.inputs.Slider({
    min: 0,
    max: 100,
    value: 30,
    type: 'MinRange',
    limits: { enabled: true, minStart: 10, minEnd: 40 },
    tootip: { isVisible: true }
});
// Render initialized Slider
slider.appendTo('#slider');


