// Initialize TextBox component
var maxLength = new ej.inputs.TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Auto'
});

// Render initialized TextBox
maxLength.appendTo('#default');

// Initialize TextBox component
var addAttr = new ej.inputs.TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Auto'
});

// Render initialized TextBox
addAttr.appendTo('#attr');

// Initialize Button component
var button = new ej.buttons.Button({
});

// Render initialized Button
button.appendTo('#button');

document.getElementById('button').onclick = function () {
    addAttr.addAttributes({maxlength: 15});
}

