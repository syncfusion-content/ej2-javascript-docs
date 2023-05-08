// Initialize default Slider component
var defaultObj = new ej.inputs.Slider({
    value: 30
});
defaultObj.appendTo('#default');
// Initialize minrange Slider component
var minRangeObj = new ej.inputs.Slider({
    value: 30,
    type: 'MinRange'
});
minRangeObj.appendTo('#minrange');
// Initialize range Slider component
var rangeObj = new ej.inputs.Slider({
    value: [30, 70],
    type: 'Range'
});
rangeObj.appendTo('#range');


