

import {NumericTextBox} from '@syncfusion/ej2-inputs';

// strictMode has been enabled by defualt
let numeric: NumericTextBox = new NumericTextBox({
    // sets the minimum range value
    min: 10,
    // sets the maximum range value
    max: 20,
    // sets value to the NumericTextBox
    value: 16,
    // sets the step value to increment or decrement value of the NumericTextBox
    // based on the step value.
    step:2
});
numeric.appendTo('#numeric');



