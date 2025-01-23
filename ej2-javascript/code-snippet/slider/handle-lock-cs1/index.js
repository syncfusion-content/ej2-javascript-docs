// Initialization of Slider
var slider = new ej.inputs.Slider({
    min: 0,
    max: 100,
    type: 'Range',
    value: [30, 70],
    limits: { enabled: true, startHandleFixed: true, endHandleFixed: true },
    tooltip: { isVisible: true }
});
// Render initialized Range Slider Control
slider.appendTo('#slider');