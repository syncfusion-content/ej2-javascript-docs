// Initialize Slider component
var SliderMinObj = new ej.inputs.Slider({
    type: 'MinRange',
    value: 30,
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    changed: onMinChanged
});
SliderMinObj.appendTo("#min-slider");
// sets required property in the FormValidator rules collection
var minOptions = {
    rules: {
        'min-slider': {
            validateHidden: true,
            min: [40, "You must select value greater than or equal to 40"]
        }
    }
};
// Initialize Form validation
var formMinObj = new ej.inputs.FormValidator("#formMinId", minOptions);
function onMinChanged(args) {
    // validate the slider value in the form
    formMinObj.validate();
}
// Initialize Slider component
var SliderMaxObj = new ej.inputs.Slider({
    type: 'MinRange',
    value: 30,
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    changed: onMaxChanged
});
SliderMaxObj.appendTo("#max-slider");
// sets required property in the FormValidator rules collection
var maxOptions = {
    rules: {
        'max-slider': {
            validateHidden: true,
            max: [40, "You must select value less than or equal to 40"]
        }
    }
};
// Initialize Form validation
var formMaxObj = new ej.inputs.FormValidator("#formMaxId", maxOptions);
function onMaxChanged(args) {
    // validate the slider value in the form
    formMaxObj.validate();
}
// Initialize Slider component
var SliderValObj = new ej.inputs.Slider({
    type: 'MinRange',
    value: 30,
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    changed: onValChanged
});
SliderValObj.appendTo("#val-slider");
// sets required property in the FormValidator rules collection
var valOptions = {
    rules: {
        'val-slider': {
            validateHidden: true,
            regex: [/40/, "You must select value equal to 40"]
        }
    }
};
// Initialize Form validation
var formValObj = new ej.inputs.FormValidator("#formValId", valOptions);
function onValChanged(args) {
    // validate the slider value in the form
    formValObj.validate();
}
// Initialize Slider component
var SliderRangeObj = new ej.inputs.Slider({
    type: 'MinRange',
    value: 30,
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    changed: onRangeChanged
});
SliderRangeObj.appendTo("#range-slider");
// sets required property in the FormValidator rules collection
var rangeOptions = {
    rules: {
        'range-slider': {
            validateHidden: true,
            range: [40, 80, "You must select values between 40 and 80"]
        }
    }
};
// Initialize Form validation
var formRangeObj = new ej.inputs.FormValidator("#formRangeId", rangeOptions);
function onRangeChanged(args) {
    // validate the slider value in the form
    formRangeObj.validate();
}
// Initialize Slider component
var SliderCustomObj = new ej.inputs.Slider({
    type: 'Range',
    value: [30, 70],
    ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
    changed: onCustomChanged
});
SliderCustomObj.appendTo("#custom-slider");
// sets required property in the FormValidator rules collection
var customOptions = {
    rules: {
        'custom-slider': {
            validateHidden: true,
            range: [validateRange, "You must select values between 40 and 80"]
        }
    }
};
// Initialize Form validation
var formCustomObj = new ej.inputs.FormValidator("#formCustomId", customOptions);
function onCustomChanged(args) {
    // validate the slider value in the form
    formCustomObj.validate();
}
function validateRange(args) {
    return SliderCustomObj.value[0] >= 40 && SliderCustomObj.value[1] <= 80;
}


