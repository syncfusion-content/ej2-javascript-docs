

import {NumericTextBox} from '@syncfusion/ej2-inputs';

/* 'c' specifier */

let currency: NumericTextBox = new NumericTextBox({
    // sets currency with 2 numbers of decimal places format
    format: 'c2',
    // sets value to the NumericTextBox
    value: 10
});
currency.appendTo('#numeric');



