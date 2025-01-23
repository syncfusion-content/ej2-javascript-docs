var minRangeObj = new ej.inputs.Slider({
    // Set slider minimum and maximum values
    min: 0, max: 100,
    // Set the value for slider
    value: 30,
    // Set the step value
    step: 1,
    // Initialize ticks with placement, largeStep, smallStep
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    // Set the type for slider
    type: 'MinRange',
    // Set the limit values for the slider
    limits: { enabled: true, minStart: 10, minEnd: 40 },
    // Initialize tooltip with placement and showOn
    tooltip: { isVisible: true, placement: 'Before', showOn: 'Focus' }
});
minRangeObj.appendTo('#minrange');
// Initialize Range Slider Control
var rangeObj = new ej.inputs.Slider({
    // Set slider minimum and maximum values
    min: 0, max: 100,
    // Set the initial range values for slider
    value: [30, 70],
    // Set the step value
    step: 1,
    // Set the type to render range slider
    type: 'Range',
    // Initialize ticks with placement, largeStep, smallStep
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    // Set the limit values for the slider
    limits: { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 },
    // Initialize tooltip with placement and showOn
    tooltip: { isVisible: true, placement: 'Before', showOn: 'Focus' }
});
rangeObj.appendTo('#range');