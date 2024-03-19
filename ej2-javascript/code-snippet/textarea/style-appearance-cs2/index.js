// Initialize TextArea component with cssClass 'e-filled'
var filledTextArea = new ej.inputs.TextArea({
    placeholder: 'Filled',
    cssClass: 'e-filled',
    floatLabelType: 'Auto'
});
filledTextArea.appendTo('#filled');

// Initialize TextArea component with cssClass 'e-outline'
var outlineTextArea = new ej.inputs.TextArea({
    placeholder: 'Outlined',
    cssClass: 'e-outline',
    floatLabelType: 'Auto'
});
outlineTextArea.appendTo('#outlined');
