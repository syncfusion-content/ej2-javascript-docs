


import {NumericTextBox} from '@syncfusion/ej2-inputs';

/* 'p' specifier */

let percent: NumericTextBox = new NumericTextBox({
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

let currency: NumericTextBox = new NumericTextBox({
    // sets currency with 2 numbers of decimal places format
    format: 'c2'
    value: 10,
    placeholder: 'Currency format',
    floatLabelType: 'Auto'
});

currency.appendTo('#currency');



