// Initialization of Slider
var slider = new ej.inputs.Slider({
    min: 0,
    max: 100,
    type: 'Range',
    value: [30, 70],
    limits: { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 },
    tootip: { isVisible: true }
});
// Render initialized Slider
slider.appendTo('#slider');


