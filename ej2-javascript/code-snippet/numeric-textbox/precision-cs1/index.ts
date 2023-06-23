


import {NumericTextBox} from '@syncfusion/ej2-inputs';

 let numeric: NumericTextBox = new NumericTextBox({
        // restricts number of decimals to be entered in the NumericTextBox
        validateDecimalOnType: true,
        // sets number of decimal places to be allowed by the NumericTextBox
        decimals: 3,
        // sets number with 3 numbers of decimal places format
        format: 'n3',
        value: 10,
        placeholder: 'ValidateDecimalOnType enabled',
        floatLabelType: 'Auto'
    });

    numeric.appendTo('#strict');

let numeric: NumericTextBox = new NumericTextBox({
        // sets number of decimal places to be allowed by the NumericTextBox
        decimals: 3,
        // sets number with 3 numbers of decimal places format
        format: 'n3',
        value: 10,
        placeholder: 'ValidateDecimalOnType disabled',
        floatLabelType: 'Auto'
    });

    numeric.appendTo('#allow');



