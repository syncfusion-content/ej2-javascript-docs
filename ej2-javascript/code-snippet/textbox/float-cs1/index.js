// Initialize TextBox component with floating type as auto
var floatTypeAuto = new ej.inputs.TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Auto'
});
// Render initialized floating type as auto TextBox
floatTypeAuto.appendTo('#multiline-auto');

// Initialize TextBox component with floating type as always
var floatTypeAlways = new ej.inputs.TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Always'
});
// Render initialized floating type as always TextBox
floatTypeAlways.appendTo('#multiline-always');

// Initialize TextBox component with floating type as never
var floatTypeNever = new ej.inputs.TextBox({
    placeholder: 'Enter your address',
    floatLabelType: 'Never'
});
// Render initialized floating type as never TextBox
floatTypeNever.appendTo('#multiline-never');

