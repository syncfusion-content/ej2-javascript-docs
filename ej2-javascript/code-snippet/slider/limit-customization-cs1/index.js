var minrangeObj = new ej.inputs.Slider({
    // Set slider minimum and maximum values
    min: 0, max: 100,
    // Set the value for slider
    value: 30,
    // Set the step value
    step: 1,
    // Initialize ticks with placement, largestep, smallstep
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    // Set the type for slider
    type: 'MinRange',
    // Set the limit values for the slider
    limits: { enabled: true, minStart: 10, minEnd: 40 },
    // Initialize tooltip with placement and showOn
    tooltip: { isVisible: true, placement: 'Before', showOn: 'Focus' }
});
minrangeObj.appendTo('#minrange');
// Initialize slider Component
var rangeObj = new ej.inputs.Slider({
    // Set slider minimum and maximum values
    min: 0, max: 100,
    // Set the initial range values for slider
    value: [30, 70],
    // Set the step value
    step: 1,
    // Set the type to render range slider
    type: 'Range',
    // Initialize ticks with placement, largestep, smallstep
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    // Set the limit values for the slider
    limits: { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 },
    // Initialize tooltip with placement and showOn
    tooltip: { isVisible: true, placement: 'Before', showOn: 'Focus' }
});
rangeObj.appendTo('#range');
// Initialize NumericTextBox
var minStart = new ej.inputs.NumericTextBox({
    value: 10,
    min: 0,
    max: 100,
    change: minStartChange
});
minStart.appendTo('#minStart');
var minEnd = new ej.inputs.NumericTextBox({
    value: 40,
    min: 0,
    max: 100,
    change: minEndChange
});
minEnd.appendTo('#minEnd');
var maxStart = new ej.inputs.NumericTextBox({
    value: 60,
    min: 0,
    max: 100,
    change: maxStartChange
});
maxStart.appendTo('#maxStart');
var maxEnd = new ej.inputs.NumericTextBox({
    value: 90,
    min: 0,
    max: 100,
    change: maxEndChange
});
maxEnd.appendTo('#maxEnd');
// Initialize Checkbox
var fixedOne = new ej.buttons.CheckBox({ change: fixOne });
fixedOne.appendTo('#fixedOne');
var fixedSecond = new ej.buttons.CheckBox({ change: fixSecond });
fixedSecond.appendTo('#fixedSecond');
// Eventlisteners to lock first handle of the both sliders
function fixOne(args) {
    minrangeObj.limits.startHandleFixed = args.checked;
    rangeObj.limits.startHandleFixed = args.checked;
}
// Eventlisteners to lock second handle of the both sliders
function fixSecond(args) {
    minrangeObj.limits.endHandleFixed = args.checked;
    rangeObj.limits.endHandleFixed = args.checked;
}
// Eventlisteners to change limit values for both sliders
function minStartChange(args) {
    minrangeObj.limits.minStart = args.value;
    rangeObj.limits.minStart = args.value;
}
function minEndChange(args) {
    minrangeObj.limits.minEnd = args.value;
    rangeObj.limits.minEnd = args.value;
}
function maxStartChange(args) {
    minrangeObj.limits.maxStart = args.value;
    rangeObj.limits.maxStart = args.value;
}
function maxEndChange(args) {
    minrangeObj.limits.maxEnd = args.value;
    rangeObj.limits.maxEnd = args.value;
}


