var ticksSlider = new ej.inputs.Slider({
    // Set slider minimum and maximum values
    min: 0, max: 100,
    // Set the initial value for slider
    value: 30,
    // Set the step value for slider
    step: 5,
    // Set the type to render minRange slider
    type: 'MinRange',
    // Initialize ticks with placement, largeStep
    ticks: { placement: 'Before', largeStep: 20 },
    // Handler used to add custom class to all tick element
    renderingTicks: function (args) {
        if (args.tickElement.classList.contains('e-large')) {
            args.tickElement.classList.add('e-custom');
        }
    }
});
ticksSlider.appendTo('#ticks_slider');
// Initialize Range Slider Control
var customTicks = new ej.inputs.Slider({
    // Set slider minimum and maximum values
    min: 0, max: 100,
    // Set the initial value for slider
    value: 30,
    // Set the type to render minRange slider
    type: 'MinRange',
    // Initialize ticks with placement, largeStep, smallStep
    ticks: { placement: 'Both', largeStep: 20, smallStep: 5 },
    // Handler used to customize tick element
    renderedTicks: function (args) {
        var li = args.ticksWrapper.getElementsByClassName('e-large');
        var remarks = ['Very Poor', 'Poor', 'Average', 'Good', 'Very Good', 'Excellent'];
        for (var i = 0; i < li.length; ++i) {
            li[i].querySelectorAll('.e-tick-both')[1].innerText = remarks[i];
        }
    }
});
customTicks.appendTo('#slider');