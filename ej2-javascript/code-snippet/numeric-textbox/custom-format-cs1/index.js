/* '#' specifier */

var numeric = new ej.inputs.NumericTextBox({
    // sets the format using custom format string `#`
    format: '###.##',
    value: 10,
    placeholder: 'Custom format string #',
    floatLabelType: 'Auto'
});

numeric.appendTo('#numeric');

/* '0' specifier */

var numeric1 = new ej.inputs.NumericTextBox({
    // sets the format using custom format string `0`
    format: '000.00',
    value: 10,
    placeholder: 'Custom format string 0',
    floatLabelType: 'Auto'
});

numeric1.appendTo('#numeric1');

