/* 'p' specifier */

var percent = new ej.inputs.NumericTextBox({
    // sets percentage with 2 numbers of decimal places format
    format: 'p2',
    value: 0.5,
    min: 0,
    max: 1,
    step: 0.01,
    placeholder: 'Percentage format',
    floatLabelType: 'Auto'
});

percent.appendTo('#percent');

/* 'c' specifier */

var currency = new ej.inputs.NumericTextBox({
    // sets currency with 2 numbers of decimal places format
    format: 'c2',
    value: 10,
    placeholder: 'Currency format',
    floatLabelType: 'Auto'
});

currency.appendTo('#currency');

