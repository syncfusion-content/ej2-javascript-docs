


import {NumericTextBox} from '@syncfusion/ej2-inputs';

/* '#' specifier */

let numeric: NumericTextBox = new NumericTextBox({
    // sets the format using custom format string `#`
    format: '###.##',
    value: 10,
    placeholder: 'Custom format string #',
    floatLabelType: 'Auto'
});

numeric.appendTo('#numeric');

/* '0' specifier */

let numeric1: NumericTextBox = new NumericTextBox({
    // sets the format using custom format string `0`
    format: '000.00',
    value: 10,
    placeholder: 'Custom format string 0',
    floatLabelType: 'Auto'
});

numeric1.appendTo('#numeric1');



